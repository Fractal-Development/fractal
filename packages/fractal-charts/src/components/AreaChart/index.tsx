import React from 'react';
import * as shape from '../../../node_modules/d3-shape/dist/d3-shape.js';
import * as scale from 'd3-scale';
import * as array from 'd3-array';
import { AreaChartProps } from '../../types';
import { createPaths } from './utils/createPaths';
import { ChartContainer } from '../ChartContainer';
import { useDimensions } from '../../hooks/useDimensions';
import { AreaChartContent } from './AreaChartContent';

export function AreaChart({
    style,
    areaColor,
    lineColor,
    lineWidth,
    dotRadius,
    gradientConfig,
    curve = shape.curveLinear,
    start = 0,
    data,
    contentInset = {},
    xAccessor = ({ index }) => index,
    yAccessor = ({ item }) => item,
    yScale = scale.scaleLinear,
    xScale = scale.scaleLinear,
    numberOfTicks = 10,
    gridMax,
    gridMin,
    clampX = false,
    clampY = false,
    yMin,
    yMax,
    xMin,
    xMax,
    ...layerProps
}: AreaChartProps): JSX.Element {
    const [dimensions, setDimensions] = useDimensions();
    const { width, height } = dimensions;

    const coordinates = data.map((item, index) => ({
        y: yAccessor({ item, index }),
        x: xAccessor({ item, index })
    }));

    const yValues = coordinates.map((item) => item.y);
    const xValues = coordinates.map((item) => item.x);

    const yExtentData = [...yValues, gridMin, gridMax];
    const yExtent = array.extent(yExtentData as number[]);
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

    return (
        <ChartContainer style={style} onChangeDimensions={setDimensions} {...layerProps}>
            {height > 0 && width > 0 && (
                <AreaChartContent
                    width={width}
                    height={height}
                    ticks={ticks}
                    coordinates={coordinates}
                    x={x}
                    y={y}
                    paths={paths}
                    areaColor={areaColor}
                    lineColor={lineColor}
                    lineWidth={lineWidth}
                    dotRadius={dotRadius}
                    gradientConfig={gradientConfig}
                />
            )}
        </ChartContainer>
    );
}
