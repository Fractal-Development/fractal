import { Dispatch, SetStateAction } from 'react';
export interface CustomAVPlaybackStatus {
    isLoaded: true;
    androidImplementation?: string;
    uri: string;
    progressUpdateIntervalMillis: number;
    durationMillis?: number;
    positionMillis: number;
    playableDurationMillis?: number;
    seekMillisToleranceBefore?: number;
    seekMillisToleranceAfter?: number;
    shouldPlay: boolean;
    isPlaying: boolean;
    isBuffering: boolean;
    rate: number;
    shouldCorrectPitch: boolean;
    volume: number;
    isMuted: boolean;
    isLooping: boolean;
    didJustFinish: boolean;
}
export interface MinimalTrackData {
    title: string;
    audioSrc: string | number;
    image: string;
}
export interface AudioPlayerReturnedObject<T> {
    currentTrackInfo: T;
    currentTime: number;
    duration: number;
    isPlaying: boolean;
    enableShufflePlayback: boolean;
    enableRepeatPlayback: boolean;
    handlePlayPause: () => void;
    setPositionManually: (time: number) => Promise<void>;
    toNextTrack: () => void;
    toPreviousTrack: () => void;
    setTrackIndex: Dispatch<SetStateAction<number>>;
    toggleShufflePlayback: () => void;
    toggleRepeatPlayback: () => void;
}
