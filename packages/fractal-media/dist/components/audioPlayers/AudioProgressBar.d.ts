import { LayerProps } from '@bma98/fractal-ui';
interface AudioProgressBarProps extends LayerProps {
    duration: number;
    currentTime: number;
    isPlaying: boolean;
    onTimeUpdate: (time: number) => Promise<void>;
    timeLabelsSpacing?: number;
}
export declare function AudioProgressBar({ duration, currentTime, isPlaying, onTimeUpdate, timeLabelsSpacing, ...layerProps }: AudioProgressBarProps): JSX.Element;
export {};
