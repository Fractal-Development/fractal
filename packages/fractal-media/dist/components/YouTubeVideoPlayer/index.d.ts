import { LayerProps } from '@bma98/fractal-ui';
export interface YouTubeVideoPlayerProps extends Omit<LayerProps, 'children' | 'width' | 'height'> {
    source: string;
    width: number;
    height: number;
}
export declare function YouTubeVideoPlayer({ source, width, height, ...layerProps }: YouTubeVideoPlayerProps): JSX.Element;
