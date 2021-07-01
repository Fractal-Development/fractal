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
import { useAudioWebEffects } from '../useAudioPlayer/hooks/useAudioWebEffects';
export function useMinimalAudioPlayer(audioSrc) {
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
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
    const setRateManually = useCallback((rate) => __awaiter(this, void 0, void 0, function* () {
        if (audioRef.current)
            audioRef.current.playbackRate = rate;
    }), []);
    const resetPosition = useCallback(() => {
        if (audioRef.current) {
            audioRef.current.currentTime = 0;
            setCurrentTime(0);
        }
    }, []);
    const resetAudio = useCallback(() => __awaiter(this, void 0, void 0, function* () {
        resetPosition();
        setIsPlaying(false);
    }), [resetPosition]);
    useAudioWebEffects(audioRef, audioSrc, setIsPlaying, setCurrentTime, setDuration, resetAudio);
    return {
        currentTime,
        duration,
        isPlaying,
        handlePlayPause,
        setPositionManually,
        setRateManually
    };
}
//# sourceMappingURL=index.js.map