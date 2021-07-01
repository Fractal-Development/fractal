import { Dispatch, SetStateAction } from 'react';
export declare function useCheckIfShouldGoToNextTrack(trackIndex: number, tracksLength: number, enableRepeatPlayback: boolean, toNextTrack: () => void, setCurrentTime: Dispatch<SetStateAction<number>>, setIsPlaying: Dispatch<SetStateAction<boolean>>, resetPosition: () => Promise<void>): () => void;
