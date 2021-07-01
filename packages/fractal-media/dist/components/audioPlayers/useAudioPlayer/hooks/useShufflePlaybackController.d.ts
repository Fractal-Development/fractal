export declare function useShufflePlaybackController<T>(tracks: Array<T>, trackIndex: number, shufflePlayback: boolean | undefined): {
    enableShufflePlayback: boolean;
    toggleShufflePlayback: () => void;
    playList: Array<T>;
};
