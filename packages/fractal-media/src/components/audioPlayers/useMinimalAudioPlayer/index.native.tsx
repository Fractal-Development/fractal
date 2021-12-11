import { useState, useRef, useCallback } from 'react';
import { Audio } from 'expo-av';
import { useAudioNativeEffects } from '../useAudioPlayer/hooks/useAudioNativeEffects';
import { AudioSource, MinimalAudioPlayerObject } from '../types';
import { CustomAVPlaybackStatus } from '../useAudioPlayer/types';

export function useMinimalAudioPlayer(audioSrc: AudioSource): MinimalAudioPlayerObject {
    const [didJustFinish, setDidJustFinish] = useState(false);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);

    const audioRef = useRef<Audio.Sound>();

    const onPlaybackStatusUpdate = useCallback((status: CustomAVPlaybackStatus): void => {
        if (status.positionMillis) {
            setCurrentTime(status.positionMillis);
        }
        if (status.didJustFinish) {
            setDidJustFinish(status.didJustFinish);
        }
    }, []);

    const loadSoundAsync = useCallback(async (): Promise<void> => {
        const source = typeof audioSrc === 'string' ? { uri: audioSrc } : audioSrc;
        try {
            if (audioRef.current) {
                await audioRef.current.unloadAsync();
            }
            const { sound: audioSound, status } = await Audio.Sound.createAsync(source, undefined, onPlaybackStatusUpdate);
            const castedStatus = status as CustomAVPlaybackStatus;
            audioRef.current = audioSound;
            if (castedStatus.durationMillis) {
                setDuration(castedStatus.durationMillis);
            }
            setCurrentTime(0);
        } catch (error) {
            alert(error);
        }
    }, [audioSrc, onPlaybackStatusUpdate]);

    const pauseAsync = useCallback(async () => {
        if (audioRef.current) {
            await audioRef.current.pauseAsync();
            setIsPlaying(false);
        }
    }, []);

    const playAsync = useCallback(async () => {
        if (audioRef.current) {
            await audioRef.current.playAsync();
            setIsPlaying(true);
        }
    }, []);

    const handlePlayPause = useCallback(async () => {
        if (isPlaying) {
            await pauseAsync();
        } else {
            await playAsync();
        }
    }, [isPlaying, pauseAsync, playAsync]);

    const setPositionManually = useCallback(
        async (positionMillis: number): Promise<void> => {
            await audioRef.current?.setPositionAsync(positionMillis);
            if (!isPlaying) await playAsync();
        },
        [isPlaying, playAsync]
    );

    const setRateManually = useCallback(async (rate: number): Promise<void> => {
        await audioRef.current?.setRateAsync(rate, true);
    }, []);

    const resetPosition = useCallback(async () => {
        await audioRef.current?.setPositionAsync(0);
        setCurrentTime(0);
    }, []);

    const resetAudio = useCallback(async () => {
        await resetPosition();
        await pauseAsync();
    }, [pauseAsync, resetPosition]);

    useAudioNativeEffects(audioRef, resetAudio, loadSoundAsync, didJustFinish, setDidJustFinish);

    return {
        currentTime,
        duration,
        isPlaying,
        handlePlayPause,
        setPositionManually,
        setRateManually
    };
}
