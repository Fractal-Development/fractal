import { LayerProps } from '@fractal/fractal-ui';
import { MinimalTrackData } from './useAudioPlayer/types';

export interface AudioPlayerProps extends Omit<LayerProps, 'flexDirection'> {
    tracks: Array<MinimalTrackData>;
    controllableTrackIndex?: number;
}

export type AudioSource = number | string;

export interface MinimalAudioPlayerObject {
    currentTime: number;
    duration: number;
    isPlaying: boolean;
    handlePlayPause: () => void;
    setPositionManually: (time: number) => Promise<void>;
    setRateManually: (time: number) => Promise<void>;
}
