import { ScaleLinear } from 'd3-scale';
import { CurveFactory } from 'd3-shape';
import { Coordinates } from '../../../types';
export declare function createPaths(data: Coordinates, x: ScaleLinear<any, any>, y: ScaleLinear<any, any>, start: number, curve: CurveFactory): {
    path: string | null;
    area: string | null;
    line: string | null;
};
