import { useCallback, Dispatch, SetStateAction } from 'react';

export function useCheckIfShouldGoToNextTrack(
    trackIndex: number,
    tracksLength: number,
    enableRepeatPlayback: boolean,
    toNextTrack: () => void,
    setCurrentTime: Dispatch<SetStateAction<number>>,
    setIsPlaying: Dispatch<SetStateAction<boolean>>,
    resetPosition: () => Promise<void>
): () => void {
    return useCallback(async () => {
        const isLastIndex = trackIndex == tracksLength - 1;
        if (!isLastIndex || (isLastIndex && enableRepeatPlayback)) {
            toNextTrack();
        } else {
            await resetPosition();
            setCurrentTime(0);
            setIsPlaying(false);
        }
    }, [enableRepeatPlayback, resetPosition, setCurrentTime, setIsPlaying, toNextTrack, trackIndex, tracksLength]);
}
