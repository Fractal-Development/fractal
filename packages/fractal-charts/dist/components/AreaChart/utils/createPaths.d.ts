import * as shape from '../../../../node_modules/d3-shape/src/index.js';
import { ScaleLinear } from 'd3-scale';
import { Coordinates } from '../../../types';
export declare function createPaths(data: Coordinates, x: ScaleLinear<any, any>, y: ScaleLinear<any, any>, start: number, curve: shape.CurveFactory): {
    path: string | null;
    area: string | null;
    line: string | null;
};
