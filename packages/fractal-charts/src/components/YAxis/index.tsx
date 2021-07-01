import React from 'react';
import * as d3Scale from 'd3-scale';
import * as array from 'd3-array';
import { YAxisProps } from '../../types';
import { useDimensions } from '../../hooks/useDimensions';
import { ChartContainer } from '../ChartContainer';
import { YAxisContent } from './YAxisContent.tsx';
import { useTheme } from '@bma98/fractal-ui';

export function YAxis({
    numberOfTicks = 10,
    contentInset = {},
    data,
    style,
    scale = d3Scale.scaleLinear,
    formatLabel = (value) => value && value.toString(),
    yAccessor = ({ item }) => item,
    textProps,
    min,
    max,
    color,
    ...layerProps
}: YAxisProps): JSX.Element {
    const [dimensions, setDimensions] = useDimensions();
    const { width, height } = dimensions;
    const { colors } = useTheme();

    const getY = (domain: any[]) => {
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

    return (
        <ChartContainer style={style} contentStyle={{ flex: undefined, flexGrow: 1 }} onChangeDimensions={setDimensions} {...layerProps}>
            <YAxisContent
                width={width}
                height={height}
                ticks={ticks}
                textProps={textProps}
                formatLabel={formatLabel}
                y={y}
                color={color ?? colors.label}
            />
        </ChartContainer>
    );
}
