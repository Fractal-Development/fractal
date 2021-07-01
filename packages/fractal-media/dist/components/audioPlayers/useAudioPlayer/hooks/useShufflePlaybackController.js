import { useState, useCallback } from 'react';
import { shuffleArray, shufflePlayList } from '../utils/shuffle';
export function useShufflePlaybackController(tracks, trackIndex, shufflePlayback) {
    const [enableShufflePlayback, setEnableShufflePlayback] = useState(shufflePlayback !== null && shufflePlayback !== void 0 ? shufflePlayback : false);
    const [playList, setPlayList] = useState(shufflePlayback ? shuffleArray(tracks) : tracks);
    const toggleShufflePlayback = useCallback(() => {
        setEnableShufflePlayback((currentValue) => {
            if (!currentValue) {
                setPlayList((currentPlayList) => shufflePlayList(currentPlayList, trackIndex));
            }
            else {
                setPlayList(tracks);
            }
            return !currentValue;
        });
    }, [trackIndex, tracks]);
    return { enableShufflePlayback, toggleShufflePlayback, playList };
}
//# sourceMappingURL=useShufflePlaybackController.js.map