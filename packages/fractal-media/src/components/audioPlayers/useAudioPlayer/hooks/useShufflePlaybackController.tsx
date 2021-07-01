import { useState, useCallback } from 'react';
import { shuffleArray, shufflePlayList } from '../utils/shuffle';

export function useShufflePlaybackController<T>(
    tracks: Array<T>,
    trackIndex: number,
    shufflePlayback: boolean | undefined
): {
    enableShufflePlayback: boolean;
    toggleShufflePlayback: () => void;
    playList: Array<T>;
} {
    const [enableShufflePlayback, setEnableShufflePlayback] = useState<boolean>(shufflePlayback ?? false);
    const [playList, setPlayList] = useState(shufflePlayback ? shuffleArray(tracks) : tracks);

    const toggleShufflePlayback = useCallback(() => {
        setEnableShufflePlayback((currentValue) => {
            if (!currentValue) {
                setPlayList((currentPlayList) => shufflePlayList(currentPlayList, trackIndex));
            } else {
                setPlayList(tracks);
            }
            return !currentValue;
        });
    }, [trackIndex, tracks]);

    return { enableShufflePlayback, toggleShufflePlayback, playList };
}
