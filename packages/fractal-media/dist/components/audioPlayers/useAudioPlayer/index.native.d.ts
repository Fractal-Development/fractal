import { AudioPlayerReturnedObject, MinimalTrackData } from './types';
export declare function useAudioPlayer<T extends MinimalTrackData>(tracks: Array<T>, shufflePlayback?: boolean, repeatPlayback?: false): AudioPlayerReturnedObject<T>;
