import { MutableRefObject, Dispatch, SetStateAction } from 'react';
export declare function useAudioWebEffects(audioRef: MutableRefObject<HTMLAudioElement | undefined>, audioSrc: string, setIsPlaying: Dispatch<SetStateAction<boolean>>, setCurrentTime: Dispatch<SetStateAction<number>>, setDuration: Dispatch<SetStateAction<number>>, checkIfShouldGoToNextTrack: () => void): void;
