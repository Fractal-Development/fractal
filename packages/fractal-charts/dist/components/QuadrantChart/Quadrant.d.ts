import { LayerProps } from '@bma98/fractal-ui';
import { QuadrantVariant, QuadrantChartColors, QuadrantIcon } from '../../types';
interface QuadrantProps extends Omit<LayerProps, 'children'>, QuadrantIcon {
    label: string;
    frequency: number;
    variant: QuadrantVariant;
    colors: QuadrantChartColors;
    showIcon?: boolean;
}
export declare function Quadrant({ label, frequency, variant, showIcon, colors, renderQuadrantIcon, ...others }: QuadrantProps): JSX.Element;
export {};
