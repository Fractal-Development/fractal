import { ScaleLinear } from 'd3-scale';
export interface YAxisContentProps {
    width: number;
    height: number;
    ticks: Array<number>;
    textProps?: {
        fontSize?: number;
        fontFamily?: string;
        fontWeight?: number | string;
    };
    formatLabel: (value: any, index: number) => number | string;
    y: ScaleLinear<number, number, never>;
    color: string;
}
