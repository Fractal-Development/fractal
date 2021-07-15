import * as shape from 'https://unpkg.com/d3-shape?module';
import { ScaleLinear } from 'd3-scale';
import { Coordinates } from '../../../types';
export declare function createPaths(data: Coordinates, x: ScaleLinear<any, any>, y: ScaleLinear<any, any>, start: number, curve: shape.CurveFactory): {
    path: string | null;
    area: string | null;
    line: string | null;
};
