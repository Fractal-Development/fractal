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
import { useDimensions } from '../../hooks/useDimensions';
import { ChartContainer } from '../ChartContainer';
import { YAxisContent } from './YAxisContent.tsx';
import { useTheme } from '@bma98/fractal-ui';
export function YAxis(_a) {
    var { numberOfTicks = 10, contentInset = {}, data, style, scale = d3Scale.scaleLinear, formatLabel = (value) => value && value.toString(), yAccessor = ({ item }) => item, textProps, min, max, color } = _a, layerProps = __rest(_a, ["numberOfTicks", "contentInset", "data", "style", "scale", "formatLabel", "yAccessor", "textProps", "min", "max", "color"]);
    const [dimensions, setDimensions] = useDimensions();
    const { width, height } = dimensions;
    const { colors } = useTheme();
    const getY = (domain) => {
        const { top = 0, bottom = 0 } = contentInset;
        const y = scale()
            .domain(domain)
            .range([height - bottom, top]);
        return y;
    };
    const values = data.map((item, index) => yAccessor({ item, index }));
    const extent = array.extent(values);
    const domain = [min || extent[0], max || extent[1]];
    //invert range to support svg coordinate system
    const y = getY(domain);
    const ticks = y.ticks(numberOfTicks);
    return (React.createElement(ChartContainer, Object.assign({ style: style, contentStyle: { flex: undefined, flexGrow: 1 }, onChangeDimensions: setDimensions }, layerProps),
        React.createElement(YAxisContent, { width: width, height: height, ticks: ticks, textProps: textProps, formatLabel: formatLabel, y: y, color: color !== null && color !== void 0 ? color : colors.label })));
}
//# sourceMappingURL=index.js.map