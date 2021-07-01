var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { useEffect } from 'react';
import { Audio } from 'expo-av';
export function useAudioNativeEffects(audioRef, checkIfShouldGoToNextTrack, handleLoadNewSoundAsync, didJustFinish, setDidJustFinish) {
    useEffect(() => {
        const loadInitialSoundAsync = () => __awaiter(this, void 0, void 0, function* () {
            if (!audioRef.current) {
                yield Audio.setAudioModeAsync({
                    playsInSilentModeIOS: true
                });
                yield handleLoadNewSoundAsync();
            }
        });
        loadInitialSoundAsync();
    }, [audioRef, handleLoadNewSoundAsync]);
    useEffect(() => {
        if (didJustFinish) {
            setDidJustFinish(false);
            checkIfShouldGoToNextTrack();
        }
    }, [checkIfShouldGoToNextTrack, didJustFinish, setDidJustFinish]);
    useEffect(() => {
        return () => {
            var _a;
            (_a = audioRef.current) === null || _a === void 0 ? void 0 : _a.unloadAsync();
            audioRef.current = undefined;
        };
    }, [audioRef]);
}
//# sourceMappingURL=useAudioNativeEffects.js.map