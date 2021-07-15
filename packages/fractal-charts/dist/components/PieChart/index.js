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
import React, { useEffect, useState } from 'react';
import * as shape from 'https://unpkg.com/d3-shape?module';
import { useDimensions } from '../../hooks/useDimensions';
import { ChartContainer } from '../ChartContainer';
import { calculateRadius } from './utils/calculateRadius';
import { PieChartContent } from './PieChartContent';
import { radiansToDegrees } from './utils/radiansToDegrees';
export function PieChart(_a) {
    var { data, valueAccessor = (item) => item.value, sort = (a, b) => b.value - a.value, style, innerRadius: innerRadiusProp = 0, outerRadius: outerRadiusProp, padAngle = 0.0, startAngle = 0, endAngle = Math.PI * 2, selectedSliceIndex } = _a, layerProps = __rest(_a, ["data", "valueAccessor", "sort", "style", "innerRadius", "outerRadius", "padAngle", "startAngle", "endAngle", "selectedSliceIndex"]);
    const [dimensions, setDimensions] = useDimensions();
    const [rotateValue, setRotateValue] = useState(0);
    const { width, height } = dimensions;
    const maxRadius = Math.min(width, height) / 2;
    const outerRadius = calculateRadius(outerRadiusProp, maxRadius, maxRadius);
    const innerRadius = calculateRadius(innerRadiusProp, maxRadius, 0);
    const createArc = shape.arc().outerRadius(outerRadius).innerRadius(innerRadius).padAngle(padAngle);
    const createPie = shape
        .pie()
        .value((d) => valueAccessor(d))
        .sort(sort)
        .startAngle(startAngle)
        .endAngle(endAngle);
    const pieSlices = createPie(data);
    useEffect(() => {
        if (selectedSliceIndex != undefined) {
            const selectedSlice = pieSlices[selectedSliceIndex];
            const middleAngle = (selectedSlice.startAngle + selectedSlice.endAngle) / 2;
            setRotateValue(radiansToDegrees(middleAngle));
        }
    }, [pieSlices, selectedSliceIndex]);
    return (React.createElement(ChartContainer, Object.assign({ style: style, onChangeDimensions: setDimensions, rotate: -rotateValue, overflow: 'hidden' }, layerProps),
        React.createElement(PieChartContent, { width: width, height: height, data: data, pieSlices: pieSlices, createArc: createArc })));
}
//# sourceMappingURL=index.js.map