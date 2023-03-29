import React from 'react';
import * as d3Scale from 'd3-scale';
import * as array from 'd3-array';
import { useTheme } from '@fractal-software/fractal-ui';
import { XAxisProps } from '../../types';
import { useDimensions } from '../../hooks/useDimensions';
import { ChartContainer } from '../ChartContainer';
import { XAxisContent } from './XAxisContent';

export function XAxis({
    contentInset = {},
    xAccessor = ({ index }) => index,
    scale = d3Scale.scaleLinear,
    formatLabel = (value) => value,
    style,
    data,
    numberOfTicks,
    textProps,
    min,
    max,
    color,
    ...layerProps
}: XAxisProps): JSX.Element {
    const [dimensions, setDimensions] = useDimensions();
    const { width, height } = dimensions;
    const { colors } = useTheme();

    const getX = (domain: any[]) => {
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

    return (
        <ChartContainer style={style} contentStyle={{ flex: undefined, flexGrow: 1 }} onChangeDimensions={setDimensions} {...layerProps}>
            <XAxisContent
                width={width}
                height={height}
                textProps={textProps}
                ticks={ticks}
                formatLabel={formatLabel}
                x={x}
                color={color ?? colors.label}
            />
        </ChartContainer>
    );
}
