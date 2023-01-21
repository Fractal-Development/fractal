import { useState, useCallback, useEffect, useRef } from 'react';
import { Audio } from 'expo-av';
import { AudioSource, MinimalAudioPlayerObject } from '../types';
import { CustomAVPlaybackStatus } from '../useAudioPlayer/types';
import { useAudioState } from '../useAudioPlayer/hooks/useAudioState';
import { useAudioMessagePlayerContext } from '../../../context';
import { numberInRange } from '../utils/numberInRange';

export function useMinimalAudioPlayer(audioSrc: AudioSource, messageID: string = ''): MinimalAudioPlayerObject {
    const [didJustFinish, setDidJustFinish] = useState(false);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [audio, setAudio] = useAudioState<Audio.Sound>(messageID);
    const [isInsideProvider] = useAudioMessagePlayerContext();

    const isLoadedInitialSound = useRef(false);

    const onPlaybackStatusUpdate = useCallback((status: Partial<CustomAVPlaybackStatus>): void => {
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
            const { sound, status } = await Audio.Sound.createAsync(source, undefined, onPlaybackStatusUpdate);
            const castedStatus = status as CustomAVPlaybackStatus;
            setAudio(sound);
            if (castedStatus.durationMillis) {
                setDuration(castedStatus.durationMillis);
            }
            setCurrentTime(0);
        } catch (error) {
            const errorMessage = JSON.stringify(error);
            alert(errorMessage);
        }
    }, [audioSrc, onPlaybackStatusUpdate, setAudio]);

    const pauseAsync = useCallback(async () => {
        if (audio != null) {
            await audio.pauseAsync();
            setIsPlaying(false);
        }
    }, [audio]);

    const playAsync = useCallback(async () => {
        if (audio != null) {
            await audio.playAsync();
            setIsPlaying(true);
        }
    }, [audio]);

    const handlePlayPause = useCallback(async () => {
        if (isPlaying) {
            await pauseAsync();
        } else {
            await playAsync();
        }
    }, [isPlaying, pauseAsync, playAsync]);

    const setPositionManually = useCallback(
        async (positionMillis: number): Promise<void> => {
            await audio?.setPositionAsync(positionMillis);
            if (!isPlaying) await playAsync();
        },
        [audio, isPlaying, playAsync]
    );

    const setRateManually = useCallback(
        async (rate: number): Promise<void> => {
            await audio?.setRateAsync(rate, true);
        },
        [audio]
    );

    const resetPosition = useCallback(async () => {
        await audio?.setPositionAsync(0);
        setCurrentTime(0);
    }, [audio]);

    const resetAudio = useCallback(async () => {
        await resetPosition();
        await pauseAsync();
    }, [pauseAsync, resetPosition]);

    useEffect(() => {
        const loadInitialSoundAsync = async () => {
            if (!audio) {
                isLoadedInitialSound.current = true;
                await Audio.setAudioModeAsync({
                    playsInSilentModeIOS: true
                });
                await loadSoundAsync();
            } else if (audio != null && isInsideProvider) {
                isLoadedInitialSound.current = true;
                const status = (await audio.getStatusAsync()) as CustomAVPlaybackStatus;
                audio.setOnPlaybackStatusUpdate(onPlaybackStatusUpdate);
                setIsPlaying(status.isPlaying);
                if (status.durationMillis) {
                    setDuration(status.durationMillis);
                    if (!status.isPlaying && numberInRange(status.positionMillis, status.durationMillis - 20, status.durationMillis)) {
                        resetPosition();
                    } else {
                        setCurrentTime(status.positionMillis);
                    }
                }
            }
        };
        if (!isLoadedInitialSound.current) {
            loadInitialSoundAsync();
        }
    }, [audio, isInsideProvider, loadSoundAsync, onPlaybackStatusUpdate, resetPosition]);

    useEffect(() => {
        if (didJustFinish) {
            setDidJustFinish(false);
            resetAudio();
        }
    }, [didJustFinish, resetAudio]);

    useEffect(() => {
        return !isInsideProvider && audio
            ? () => {
                  audio.unloadAsync();
              }
            : undefined;
    }, [audio, isInsideProvider]);

    return {
        currentTime,
        duration,
        isPlaying,
        handlePlayPause,
        setPositionManually,
        setRateManually
    };
}
