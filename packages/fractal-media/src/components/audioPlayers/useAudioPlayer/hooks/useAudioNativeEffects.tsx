import { MutableRefObject, useEffect, Dispatch, SetStateAction } from 'react';
import { Audio } from 'expo-av';

export function useAudioNativeEffects(
    audioRef: MutableRefObject<Audio.Sound | undefined>,
    checkIfShouldGoToNextTrack: () => void,
    handleLoadNewSoundAsync: () => Promise<void>,
    didJustFinish: boolean,
    setDidJustFinish: Dispatch<SetStateAction<boolean>>
): void {
    useEffect(() => {
        const loadInitialSoundAsync = async () => {
            if (!audioRef.current) {
                await Audio.setAudioModeAsync({
                    playsInSilentModeIOS: true
                });
                await handleLoadNewSoundAsync();
            }
        };
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
            audioRef.current?.unloadAsync();
            audioRef.current = undefined;
        };
    }, [audioRef]);
}
