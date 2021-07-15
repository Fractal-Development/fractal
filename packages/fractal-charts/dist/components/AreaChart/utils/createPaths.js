import * as shape from 'https://unpkg.com/d3-shape?module';
export function createPaths(data, x, y, start, curve) {
    const area = shape
        .area()
        .x((d) => x(d.x))
        .y0(y(start))
        .y1((d) => y(d.y))
        .defined((item) => typeof item.y === 'number')
        .curve(curve)(data);
    const line = shape
        .line()
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
//# sourceMappingURL=createPaths.js.map