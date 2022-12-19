import { useState, useRef, useCallback } from 'react';
import { AudioSource, MinimalAudioPlayerObject } from '../types';
import { useAudioWebEffects } from '../useAudioPlayer/hooks/useAudioWebEffects';

export function useMinimalAudioPlayer(audioSrc: AudioSource, _messageID?: string): MinimalAudioPlayerObject {
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);

    const audioRef = useRef<HTMLAudioElement>();

    const play = useCallback(() => {
        if (audioRef.current) audioRef.current.play();
        setIsPlaying(true);
    }, []);

    const pause = useCallback(() => {
        if (audioRef.current) audioRef.current.pause();
        setIsPlaying(false);
    }, []);

    const handlePlayPause = useCallback(() => {
        if (isPlaying) {
            pause();
        } else {
            play();
        }
    }, [isPlaying, pause, play]);

    const setPositionManually = useCallback(
        async (positionMillis: number): Promise<void> => {
            if (audioRef.current) audioRef.current.currentTime = positionMillis / 1000;
            setCurrentTime(positionMillis);
            if (!isPlaying) play();
        },
        [isPlaying, play]
    );

    const setRateManually = useCallback(async (rate: number): Promise<void> => {
        if (audioRef.current) audioRef.current.playbackRate = rate;
    }, []);

    const resetPosition = useCallback(() => {
        if (audioRef.current) {
            audioRef.current.currentTime = 0;
            setCurrentTime(0);
        }
    }, []);

    const resetAudio = useCallback(async () => {
        resetPosition();
        setIsPlaying(false);
    }, [resetPosition]);

    useAudioWebEffects(audioRef, audioSrc as string, setIsPlaying, setCurrentTime, setDuration, resetAudio);

    return {
        currentTime,
        duration,
        isPlaying,
        handlePlayPause,
        setPositionManually,
        setRateManually
    };
}
