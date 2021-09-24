import { AudioPlayerReturnedObject, MinimalTrackData } from './types';
export declare function useAudioPlayer<T extends MinimalTrackData>(tracks: Array<T>, controllableTrackIndex?: number, shufflePlayback?: boolean, repeatPlayback?: boolean): AudioPlayerReturnedObject<T>;
