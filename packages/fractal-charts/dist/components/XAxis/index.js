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
import * as d3Scale from 'd3-scale';
import * as array from 'd3-array';
import { useTheme } from '@bma98/fractal-ui';
import { useDimensions } from '../../hooks/useDimensions';
import { ChartContainer } from '../ChartContainer';
import { XAxisContent } from './XAxisContent';
export function XAxis(_a) {
    var { contentInset = {}, xAccessor = ({ index }) => index, scale = d3Scale.scaleLinear, formatLabel = (value) => value, style, data, numberOfTicks, textProps, min, max, color } = _a, layerProps = __rest(_a, ["contentInset", "xAccessor", "scale", "formatLabel", "style", "data", "numberOfTicks", "textProps", "min", "max", "color"]);
    const [dimensions, setDimensions] = useDimensions();
    const { width, height } = dimensions;
    const { colors } = useTheme();
    const getX = (domain) => {
        const { left = 0, right = 0 } = contentInset;
        const x = scale()
            .domain(domain)
            .range([left, width - right]);
        return x;
    };
    const values = data.map((item, index) => xAccessor({ item, index }));
    const extent = array.extent(values);
    const domain = [min || extent[0], max || extent[1]];
    const x = getX(domain);
    const ticks = numberOfTicks ? x.ticks(numberOfTicks) : values;
    return (React.createElement(ChartContainer, Object.assign({ style: style, contentStyle: { flex: undefined, flexGrow: 1 }, onChangeDimensions: setDimensions }, layerProps),
        React.createElement(XAxisContent, { width: width, height: height, textProps: textProps, ticks: ticks, formatLabel: formatLabel, x: x, color: color !== null && color !== void 0 ? color : colors.label })));
}
//# sourceMappingURL=index.js.map