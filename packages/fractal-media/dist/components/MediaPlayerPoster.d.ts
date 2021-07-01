import { ImageBackgroundProps } from '@bma98/fractal-ui';
export interface MediaPlayerPosterProps extends ImageBackgroundProps {
    onPlayPress?: () => void;
    playerButtonSize?: number;
}
export declare function MediaPlayerPoster({ onPlayPress, playerButtonSize, ...others }: MediaPlayerPosterProps): JSX.Element;
