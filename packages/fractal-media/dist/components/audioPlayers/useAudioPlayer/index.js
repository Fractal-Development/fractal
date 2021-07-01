var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { useState, useRef, useCallback } from 'react';
import { useEnableRepeatPlayback } from './hooks/useEnableRepeatPlayback';
import { useShufflePlaybackController } from './hooks/useShufflePlaybackController';
import { useCheckIfShouldGoToNextTrack } from './hooks/useCheckIfShouldGoToNextTrack';
import { useAudioWebEffects } from './hooks/useAudioWebEffects';
import { usePreviousAndNextControllers } from './hooks/usePreviousAndNextControllers';
export function useAudioPlayer(tracks, shufflePlayback, repeatPlayback) {
    const [trackIndex, setTrackIndex] = useState(0);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const { enableRepeatPlayback, toggleRepeatPlayback } = useEnableRepeatPlayback(repeatPlayback);
    const { enableShufflePlayback, toggleShufflePlayback, playList } = useShufflePlaybackController(tracks, trackIndex, shufflePlayback);
    const currentTrackInfo = playList[trackIndex];
    const { audioSrc } = currentTrackInfo;
    const audioRef = useRef();
    const play = useCallback(() => {
        if (audioRef.current)
            audioRef.current.play();
        setIsPlaying(true);
    }, []);
    const pause = useCallback(() => {
        if (audioRef.current)
            audioRef.current.pause();
        setIsPlaying(false);
    }, []);
    const handlePlayPause = useCallback(() => {
        if (isPlaying) {
            pause();
        }
        else {
            play();
        }
    }, [isPlaying, pause, play]);
    const setPositionManually = useCallback((positionMillis) => __awaiter(this, void 0, void 0, function* () {
        if (audioRef.current)
            audioRef.current.currentTime = positionMillis / 1000;
        setCurrentTime(positionMillis);
        if (!isPlaying)
            play();
    }), [isPlaying, play]);
    const { toPreviousTrack, toNextTrack } = usePreviousAndNextControllers(audioRef, trackIndex, tracks.length, setTrackIndex);
    const resetPosition = useCallback(() => __awaiter(this, void 0, void 0, function* () {
        if (audioRef.current)
            audioRef.current.currentTime = 0;
    }), []);
    const checkIfShouldGoToNextTrack = useCheckIfShouldGoToNextTrack(trackIndex, tracks.length, enableRepeatPlayback, toNextTrack, setCurrentTime, setIsPlaying, resetPosition);
    useAudioWebEffects(audioRef, audioSrc, setIsPlaying, setCurrentTime, setDuration, checkIfShouldGoToNextTrack);
    return {
        currentTrackInfo,
        currentTime,
        duration,
        isPlaying,
        enableShufflePlayback,
        enableRepeatPlayback,
        handlePlayPause,
        setPositionManually,
        toNextTrack,
        toPreviousTrack,
        setTrackIndex,
        toggleShufflePlayback,
        toggleRepeatPlayback
    };
}
//# sourceMappingURL=index.js.map