import * as shape from 'd3-shape';
import { ScaleLinear } from 'd3-scale';
import { CurveFactory } from 'd3-shape';
import { Coordinates, XYPair } from '../../../types';

export function createPaths(
    data: Coordinates,
    x: ScaleLinear<any, any>,
    y: ScaleLinear<any, any>,
    start: number,
    curve: CurveFactory
): {
    path: string | null;
    area: string | null;
    line: string | null;
} {
    const area = shape
        .area<XYPair>()
        .x((d) => x(d.x))
        .y0(y(start))
        .y1((d) => y(d.y))
        .defined((item) => typeof item.y === 'number')
        .curve(curve)(data);

    const line = shape
        .line<XYPair>()
        .x((d) => x(d.x))
        .y((d) => y(d.y))
        .defined((item) => typeof item.y === 'number')
        .curve(curve)(data);

    return {
        path: area,
        area,
        line
    };
}
