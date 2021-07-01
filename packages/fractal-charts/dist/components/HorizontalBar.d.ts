import { LayerProps } from '@bma98/fractal-ui';
export interface HorizontalBarProps extends Omit<LayerProps, 'children'> {
    percentage: number;
    colors: {
        background: string;
        bar: string;
    };
    barHeight?: number;
    barBorderRadius?: number;
}
export declare function HorizontalBar({ percentage, colors, barHeight, barBorderRadius, ...layerProps }: HorizontalBarProps): JSX.Element;
