import { LayerProps } from '@bma98/fractal-ui';
import { AudioSource } from './types';
export interface AudioMessagePlayerProps extends LayerProps {
    audioSrc: AudioSource;
}
export declare function AudioMessagePlayer({ audioSrc, ...layerProps }: AudioMessagePlayerProps): JSX.Element;
