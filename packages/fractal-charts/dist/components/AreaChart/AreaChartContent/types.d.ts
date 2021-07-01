import { ScaleLinear } from 'd3-scale';
import { Coordinates, GradientConfig } from '../../../types';
export interface AreaChartContentProps {
    width: number;
    height: number;
    ticks: Array<number>;
    x: ScaleLinear<number, number, never>;
    y: ScaleLinear<number, number, never>;
    paths: {
        path: string | null;
        area: string | null;
        line: string | null;
    };
    areaColor: string;
    lineColor?: string;
    lineWidth?: number;
    dotRadius?: number;
    gradientConfig?: GradientConfig;
    coordinates: Coordinates;
}
