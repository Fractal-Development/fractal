var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from 'react';
import * as shape from '../../../node_modules/d3-shape/dist/d3-shape.js';
import * as scale from 'd3-scale';
import * as array from 'd3-array';
import { createPaths } from './utils/createPaths';
import { ChartContainer } from '../ChartContainer';
import { useDimensions } from '../../hooks/useDimensions';
import { AreaChartContent } from './AreaChartContent';
export function AreaChart(_a) {
    var { style, areaColor, lineColor, lineWidth, dotRadius, gradientConfig, curve = shape.curveLinear, start = 0, data, contentInset = {}, xAccessor = ({ index }) => index, yAccessor = ({ item }) => item, yScale = scale.scaleLinear, xScale = scale.scaleLinear, numberOfTicks = 10, gridMax, gridMin, clampX = false, clampY = false, yMin, yMax, xMin, xMax } = _a, layerProps = __rest(_a, ["style", "areaColor", "lineColor", "lineWidth", "dotRadius", "gradientConfig", "curve", "start", "data", "contentInset", "xAccessor", "yAccessor", "yScale", "xScale", "numberOfTicks", "gridMax", "gridMin", "clampX", "clampY", "yMin", "yMax", "xMin", "xMax"]);
    const [dimensions, setDimensions] = useDimensions();
    const { width, height } = dimensions;
    const coordinates = data.map((item, index) => ({
        y: yAccessor({ item, index }),
        x: xAccessor({ item, index })
    }));
    const yValues = coordinates.map((item) => item.y);
    const xValues = coordinates.map((item) => item.x);
    const yExtentData = [...yValues, gridMin, gridMax];
    const yExtent = array.extent(yExtentData);
    const xExtent = array.extent([...xValues]);
    const { top = 0, bottom = 0, left = 0, right = 0 } = contentInset;
    //invert range to support svg coordinate system
    const y = yScale()
        .domain([yMin || Number(yExtent[0]), yMax || Number(yExtent[1])])
        .range([height - bottom, top])
        .clamp(clampY);
    const x = xScale()
        .domain([xMin || Number(xExtent[0]), xMax || Number(xExtent[1])])
        .range([left, width - right])
        .clamp(clampX);
    const paths = createPaths(coordinates, x, y, start, curve);
    const ticks = y.ticks(numberOfTicks);
    return (React.createElement(ChartContainer, Object.assign({ style: style, onChangeDimensions: setDimensions }, layerProps), height > 0 && width > 0 && (React.createElement(AreaChartContent, { width: width, height: height, ticks: ticks, coordinates: coordinates, x: x, y: y, paths: paths, areaColor: areaColor, lineColor: lineColor, lineWidth: lineWidth, dotRadius: dotRadius, gradientConfig: gradientConfig }))));
}
//# sourceMappingURL=index.js.map