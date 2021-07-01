import React, { useEffect, useState } from 'react';
import * as shape from 'd3-shape';
import { useDimensions } from '../../hooks/useDimensions';
import { PieChartData, PieChartProps } from '../../types';
import { ChartContainer } from '../ChartContainer';
import { calculateRadius } from './utils/calculateRadius';
import { PieChartContent } from './PieChartContent';
import { radiansToDegrees } from './utils/radiansToDegrees';

export function PieChart({
    data,
    valueAccessor = (item) => item.value,
    sort = (a, b) => b.value - a.value,
    style,
    innerRadius: innerRadiusProp = 0,
    outerRadius: outerRadiusProp,
    padAngle = 0.0,
    startAngle = 0,
    endAngle = Math.PI * 2,
    selectedSliceIndex,
    ...layerProps
}: PieChartProps): JSX.Element {
    const [dimensions, setDimensions] = useDimensions();
    const [rotateValue, setRotateValue] = useState<number>(0);
    const { width, height } = dimensions;
    const maxRadius = Math.min(width, height) / 2;

    const outerRadius = calculateRadius(outerRadiusProp, maxRadius, maxRadius);
    const innerRadius = calculateRadius(innerRadiusProp, maxRadius, 0);

    const createArc = shape.arc<PieChartData>().outerRadius(outerRadius).innerRadius(innerRadius).padAngle(padAngle);

    const createPie = shape
        .pie<PieChartData>()
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

    return (
        <ChartContainer style={style} onChangeDimensions={setDimensions} rotate={-rotateValue} {...layerProps}>
            <PieChartContent width={width} height={height} data={data} pieSlices={pieSlices} createArc={createArc} />
        </ChartContainer>
    );
}
