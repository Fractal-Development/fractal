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
import { Audio } from 'expo-av';
import { useAudioNativeEffects } from '../useAudioPlayer/hooks/useAudioNativeEffects';
export function useMinimalAudioPlayer(audioSrc) {
    const [didJustFinish, setDidJustFinish] = useState(false);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef();
    const onPlaybackStatusUpdate = useCallback((status) => {
        if (status.positionMillis) {
            setCurrentTime(status.positionMillis);
        }
        if (status.didJustFinish) {
            setDidJustFinish(status.didJustFinish);
        }
    }, []);
    const loadSoundAsync = useCallback(() => __awaiter(this, void 0, void 0, function* () {
        const source = typeof audioSrc == 'string' ? { uri: audioSrc } : audioSrc;
        try {
            if (audioRef.current) {
                yield audioRef.current.unloadAsync();
            }
            const { sound: audioSound, status } = yield Audio.Sound.createAsync(source, undefined, onPlaybackStatusUpdate);
            const castedStatus = status;
            audioRef.current = audioSound;
            if (castedStatus.durationMillis) {
                setDuration(castedStatus.durationMillis);
            }
            setCurrentTime(0);
        }
        catch (error) {
            alert(error);
        }
    }), [audioSrc, onPlaybackStatusUpdate]);
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
    const setRateManually = useCallback((rate) => __awaiter(this, void 0, void 0, function* () {
        var _b;
        yield ((_b = audioRef.current) === null || _b === void 0 ? void 0 : _b.setRateAsync(rate, true));
    }), []);
    const resetPosition = useCallback(() => __awaiter(this, void 0, void 0, function* () {
        var _c;
        yield ((_c = audioRef.current) === null || _c === void 0 ? void 0 : _c.setPositionAsync(0));
        setCurrentTime(0);
    }), []);
    const resetAudio = useCallback(() => __awaiter(this, void 0, void 0, function* () {
        yield resetPosition();
        yield pauseAsync();
    }), [pauseAsync, resetPosition]);
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
//# sourceMappingURL=index.platform.js.map
