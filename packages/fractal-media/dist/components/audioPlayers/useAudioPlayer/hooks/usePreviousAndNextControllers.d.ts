import { RefObject } from 'react';
export declare function usePreviousAndNextControllers(audioRef: RefObject<unknown | undefined>, trackIndex: number, tracksLength: number, handleChangeTrackIndex: (newIndex: number) => void): {
    toPreviousTrack: () => void;
    toNextTrack: () => void;
};
