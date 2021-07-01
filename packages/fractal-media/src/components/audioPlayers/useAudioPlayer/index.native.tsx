import { useState, useCallback, useRef } from 'react';
import { Audio } from 'expo-av';
import { AudioPlayerReturnedObject, MinimalTrackData, CustomAVPlaybackStatus } from './types';
import { useShufflePlaybackController } from './hooks/useShufflePlaybackController';
import { useEnableRepeatPlayback } from './hooks/useEnableRepeatPlayback';
import { useCheckIfShouldGoToNextTrack } from './hooks/useCheckIfShouldGoToNextTrack';
import { usePreviousAndNextControllers } from './hooks/usePreviousAndNextControllers';
import { useAudioNativeEffects } from './hooks/useAudioNativeEffects';

export function useAudioPlayer<T extends MinimalTrackData>(
    tracks: Array<T>,
    shufflePlayback?: boolean,
    repeatPlayback?: false
): AudioPlayerReturnedObject<T> {
    const [didJustFinish, setDidJustFinish] = useState(false);
    const [duration, setDuration] = useState(0);
    const [trackIndex, setTrackIndex] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const { enableRepeatPlayback, toggleRepeatPlayback } = useEnableRepeatPlayback(repeatPlayback);
    const { enableShufflePlayback, toggleShufflePlayback, playList } = useShufflePlaybackController(tracks, trackIndex, shufflePlayback);

    const audioRef = useRef<Audio.Sound>();
    const currentTrackInfo = playList[trackIndex];

    const onPlaybackStatusUpdate = useCallback((status: CustomAVPlaybackStatus): void => {
        if (status.positionMillis) {
            setCurrentTime(status.positionMillis);
        }
        if (status.didJustFinish) {
            setDidJustFinish(status.didJustFinish);
        }
    }, []);

    const loadNewSoundAsync = useCallback(
        async (newTrackIndex: number, shouldPlay: boolean, positionMillis?: number): Promise<void> => {
            const { audioSrc } = playList[newTrackIndex];
            const source = typeof audioSrc == 'string' ? { uri: audioSrc } : audioSrc;
            try {
                if (audioRef.current) {
                    await audioRef.current.unloadAsync();
                }
                const { sound: audioSound, status } = await Audio.Sound.createAsync(
                    source,
                    { shouldPlay, positionMillis },
                    onPlaybackStatusUpdate
                );
                const castedStatus = status as CustomAVPlaybackStatus;
                audioRef.current = audioSound;
                if (castedStatus.durationMillis) {
                    setDuration(castedStatus.durationMillis);
                }
                setCurrentTime(positionMillis ?? 0);
            } catch (error) {
                alert(error);
            }
        },
        [onPlaybackStatusUpdate, playList]
    );

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

    const handleChangeSound = useCallback(
        async (newTrackIndex) => {
            setTrackIndex(newTrackIndex);
            setIsPlaying(true);
            await loadNewSoundAsync(newTrackIndex, true);
        },
        [loadNewSoundAsync]
    );

    const { toPreviousTrack, toNextTrack } = usePreviousAndNextControllers(audioRef, trackIndex, tracks.length, handleChangeSound);

    const resetPosition = useCallback(async () => {
        await audioRef.current?.setPositionAsync(0);
    }, []);

    const checkIfShouldGoToNextTrack = useCheckIfShouldGoToNextTrack(
        trackIndex,
        tracks.length,
        enableRepeatPlayback,
        toNextTrack,
        setCurrentTime,
        setIsPlaying,
        resetPosition
    );

    const handleLoadNewSoundAsync = useCallback(async () => {
        await loadNewSoundAsync(trackIndex, isPlaying, currentTime);
    }, [currentTime, isPlaying, loadNewSoundAsync, trackIndex]);

    useAudioNativeEffects(audioRef, checkIfShouldGoToNextTrack, handleLoadNewSoundAsync, didJustFinish, setDidJustFinish);

    return {
        currentTrackInfo,
        currentTime,
        duration,
        isPlaying,
        enableShufflePlayback,
        enableRepeatPlayback,
        handlePlayPause,
        setPositionManually: (time: number) => setPositionManually(time),
        toNextTrack,
        toPreviousTrack,
        setTrackIndex,
        toggleShufflePlayback,
        toggleRepeatPlayback
    };
}
