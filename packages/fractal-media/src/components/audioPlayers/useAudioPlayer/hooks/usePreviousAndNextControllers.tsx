import { RefObject, useCallback } from 'react';

export function usePreviousAndNextControllers(
    audioRef: RefObject<unknown | undefined>,
    trackIndex: number,
    tracksLength: number,
    handleChangeTrackIndex: (newIndex: number) => void
): {
    toPreviousTrack: () => void;
    toNextTrack: () => void;
} {
    const toPreviousTrack = useCallback(() => {
        if (audioRef.current) {
            const newTrackIndex = trackIndex - 1 < 0 ? tracksLength - 1 : trackIndex - 1;
            handleChangeTrackIndex(newTrackIndex);
        }
    }, [audioRef, handleChangeTrackIndex, trackIndex, tracksLength]);

    const toNextTrack = useCallback(() => {
        if (audioRef.current) {
            const newTrackIndex = trackIndex < tracksLength - 1 ? trackIndex + 1 : 0;
            handleChangeTrackIndex(newTrackIndex);
        }
    }, [audioRef, handleChangeTrackIndex, trackIndex, tracksLength]);

    return { toPreviousTrack, toNextTrack };
}
