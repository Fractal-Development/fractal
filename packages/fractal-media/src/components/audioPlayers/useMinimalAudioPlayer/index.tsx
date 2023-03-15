import { useState, useCallback, useEffect, useRef } from 'react';
import { useAudioMessagePlayerContext } from '../../../context/hooks/useAudioMessagePlayerContex';
import { AudioSource, MinimalAudioPlayerObject } from '../types';
import { useAudioState } from '../useAudioPlayer/hooks/useAudioState';

export function useMinimalAudioPlayer(audioSrc: AudioSource, messageID: string = ''): MinimalAudioPlayerObject {
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    // const [audio, setAudio] = useState<HTMLAudioElement>();
    const [audio, setAudio] = useAudioState<HTMLAudioElement>(messageID);
    const [isInsideProvider] = useAudioMessagePlayerContext();

    const isLoadedInitialSound = useRef(false);

    const play = useCallback(() => {
        if (audio) audio.play();
        setIsPlaying(true);
    }, [audio]);

    const pause = useCallback(() => {
        if (audio) audio.pause();
        setIsPlaying(false);
    }, [audio]);

    const handlePlayPause = useCallback(() => {
        if (isPlaying) {
            pause();
        } else {
            play();
        }
    }, [isPlaying, pause, play]);

    const setPositionManually = useCallback(
        async (positionMillis: number): Promise<void> => {
            if (audio) audio.currentTime = positionMillis / 1000;
            setCurrentTime(positionMillis);
            if (!isPlaying) play();
        },
        [audio, isPlaying, play]
    );

    const setRateManually = useCallback(
        async (rate: number): Promise<void> => {
            if (audio) audio.playbackRate = rate;
        },
        [audio]
    );

    const resetPosition = useCallback(() => {
        if (audio) {
            audio.currentTime = 0;
            setCurrentTime(0);
        }
    }, [audio]);

    const resetAudio = useCallback(async () => {
        resetPosition();
        setIsPlaying(false);
    }, [resetPosition]);

    useEffect(() => {
        const loadInitialSound = () => {
            if (!audio) {
                isLoadedInitialSound.current = true;
                const newAudioInstance = new Audio(audioSrc as string);
                setAudio(newAudioInstance);
            } else {
                isLoadedInitialSound.current = true;
                setIsPlaying(!audio.paused);
                if (!Number.isNaN(audio.duration)) {
                    setDuration(audio.duration * 1000);
                }
                if (audio.ended) {
                    setCurrentTime(0);
                } else {
                    setCurrentTime(audio.currentTime * 1000);
                }
            }
        };
        if (!isLoadedInitialSound.current) {
            loadInitialSound();
        }
    }, [audio, audioSrc, setAudio]);

    useEffect(() => {
        const onLoadedData = (): void => {
            if (audio != null && !Number.isNaN(audio.duration)) {
                setDuration(audio.duration * 1000);
            }
        };

        const onTimeUpdate = (): void => {
            if (audio != null) {
                setCurrentTime(audio.currentTime * 1000);
            }
        };
        if (audio != null) {
            audio.addEventListener('loadeddata', onLoadedData);
            audio.addEventListener('timeupdate', onTimeUpdate);
        }

        return audio != null
            ? () => {
                  if (!isInsideProvider) {
                      audio.pause();
                  }
                  audio.removeEventListener('loadeddata', onLoadedData);
                  audio.removeEventListener('timeupdate', onTimeUpdate);
              }
            : undefined;
    }, [audio, isInsideProvider]);

    useEffect(() => {
        const onEnded = (): void => {
            resetAudio();
        };
        audio?.addEventListener('ended', onEnded);

        return () => {
            audio?.removeEventListener('ended', onEnded);
        };
    }, [audio, resetAudio]);

    return {
        currentTime,
        duration,
        isPlaying,
        handlePlayPause,
        setPositionManually,
        setRateManually,
        loading: !isLoadedInitialSound.current
    };
}
