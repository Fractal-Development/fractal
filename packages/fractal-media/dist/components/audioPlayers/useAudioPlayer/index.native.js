var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { useState, useCallback, useRef } from 'react';
import { Audio } from 'expo-av';
import { useShufflePlaybackController } from './hooks/useShufflePlaybackController';
import { useEnableRepeatPlayback } from './hooks/useEnableRepeatPlayback';
import { useCheckIfShouldGoToNextTrack } from './hooks/useCheckIfShouldGoToNextTrack';
import { usePreviousAndNextControllers } from './hooks/usePreviousAndNextControllers';
import { useAudioNativeEffects } from './hooks/useAudioNativeEffects';
export function useAudioPlayer(tracks, shufflePlayback, repeatPlayback) {
    const [didJustFinish, setDidJustFinish] = useState(false);
    const [duration, setDuration] = useState(0);
    const [trackIndex, setTrackIndex] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const { enableRepeatPlayback, toggleRepeatPlayback } = useEnableRepeatPlayback(repeatPlayback);
    const { enableShufflePlayback, toggleShufflePlayback, playList } = useShufflePlaybackController(tracks, trackIndex, shufflePlayback);
    const audioRef = useRef();
    const currentTrackInfo = playList[trackIndex];
    const onPlaybackStatusUpdate = useCallback((status) => {
        if (status.positionMillis) {
            setCurrentTime(status.positionMillis);
        }
        if (status.didJustFinish) {
            setDidJustFinish(status.didJustFinish);
        }
    }, []);
    const loadNewSoundAsync = useCallback((newTrackIndex, shouldPlay, positionMillis) => __awaiter(this, void 0, void 0, function* () {
        const { audioSrc } = playList[newTrackIndex];
        const source = typeof audioSrc == 'string' ? { uri: audioSrc } : audioSrc;
        try {
            if (audioRef.current) {
                yield audioRef.current.unloadAsync();
            }
            const { sound: audioSound, status } = yield Audio.Sound.createAsync(source, { shouldPlay, positionMillis }, onPlaybackStatusUpdate);
            const castedStatus = status;
            audioRef.current = audioSound;
            if (castedStatus.durationMillis) {
                setDuration(castedStatus.durationMillis);
            }
            setCurrentTime(positionMillis !== null && positionMillis !== void 0 ? positionMillis : 0);
        }
        catch (error) {
            alert(error);
        }
    }), [onPlaybackStatusUpdate, playList]);
    const pauseAsync = useCallback(() => __awaiter(this, void 0, void 0, function* () {
        if (audioRef.current) {
            yield audioRef.current.pauseAsync();
            setIsPlaying(false);
        }
    }), []);
    const playAsync = useCallback(() => __awaiter(this, void 0, void 0, function* () {
        if (audioRef.current) {
            yield audioRef.current.playAsync();
            setIsPlaying(true);
        }
    }), []);
    const handlePlayPause = useCallback(() => __awaiter(this, void 0, void 0, function* () {
        if (isPlaying) {
            yield pauseAsync();
        }
        else {
            yield playAsync();
        }
    }), [isPlaying, pauseAsync, playAsync]);
    const setPositionManually = useCallback((positionMillis) => __awaiter(this, void 0, void 0, function* () {
        var _a;
        yield ((_a = audioRef.current) === null || _a === void 0 ? void 0 : _a.setPositionAsync(positionMillis));
        if (!isPlaying)
            yield playAsync();
    }), [isPlaying, playAsync]);
    const handleChangeSound = useCallback((newTrackIndex) => __awaiter(this, void 0, void 0, function* () {
        setTrackIndex(newTrackIndex);
        setIsPlaying(true);
        yield loadNewSoundAsync(newTrackIndex, true);
    }), [loadNewSoundAsync]);
    const { toPreviousTrack, toNextTrack } = usePreviousAndNextControllers(audioRef, trackIndex, tracks.length, handleChangeSound);
    const resetPosition = useCallback(() => __awaiter(this, void 0, void 0, function* () {
        var _b;
        yield ((_b = audioRef.current) === null || _b === void 0 ? void 0 : _b.setPositionAsync(0));
    }), []);
    const checkIfShouldGoToNextTrack = useCheckIfShouldGoToNextTrack(trackIndex, tracks.length, enableRepeatPlayback, toNextTrack, setCurrentTime, setIsPlaying, resetPosition);
    const handleLoadNewSoundAsync = useCallback(() => __awaiter(this, void 0, void 0, function* () {
        yield loadNewSoundAsync(trackIndex, isPlaying, currentTime);
    }), [currentTime, isPlaying, loadNewSoundAsync, trackIndex]);
    useAudioNativeEffects(audioRef, checkIfShouldGoToNextTrack, handleLoadNewSoundAsync, didJustFinish, setDidJustFinish);
    return {
        currentTrackInfo,
        currentTime,
        duration,
        isPlaying,
        enableShufflePlayback,
        enableRepeatPlayback,
        handlePlayPause,
        setPositionManually: (time) => setPositionManually(time),
        toNextTrack,
        toPreviousTrack,
        setTrackIndex,
        toggleShufflePlayback,
        toggleRepeatPlayback
    };
}
//# sourceMappingURL=index.native.js.map