import { MutableRefObject, Dispatch, SetStateAction } from 'react';
import { Audio } from 'expo-av';
export declare function useAudioNativeEffects(audioRef: MutableRefObject<Audio.Sound | undefined>, checkIfShouldGoToNextTrack: () => void, handleLoadNewSoundAsync: () => Promise<void>, didJustFinish: boolean, setDidJustFinish: Dispatch<SetStateAction<boolean>>): void;
