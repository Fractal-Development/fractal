import { LayerProps } from '@bma98/fractal-ui';
export interface OmniPlayerProps extends Omit<LayerProps, 'children' | 'width' | 'height'> {
    source: number | string;
    width: number;
    height: number;
}
export declare function OmniPlayer({ source, width, height, ...layerProps }: OmniPlayerProps): JSX.Element;
