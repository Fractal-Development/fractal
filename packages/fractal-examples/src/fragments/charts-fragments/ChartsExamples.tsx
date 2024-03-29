import React from 'react';
import { Text, useTheme, Box } from '@fractal-software/fractal-ui';
import { HorizontalBar } from '@fractal-software/fractal-charts';
import { PieChartExample } from './PieChartExample';
import { AreaChartExample } from './AreaChartExample';
import { QuadrantChartExample } from './QuadrantChartExample';

export function ChartsExamples(): JSX.Element {
    const { spacings, colors } = useTheme();
    //const randomColor = () => `#${((Math.random() * 0xffffff) << 0).toString(16)}000000`.slice(0, 7);

    const pieData = [
        {
            value: 50,
            color: colors.mainInteractiveColor
        },
        {
            value: 10,
            color: colors.alternativeInteractiveColor
        },
        {
            value: 40,
            color: colors.successInteractiveColor
        }
    ];

    return (
        <>
            <Text variant='title' marginBottom={spacings.m}>
                Pie Chart Example
            </Text>
            <PieChartExample data={pieData} />
            <Text variant='title' marginBottom={spacings.m}>
                Area Chart Example
            </Text>
            <AreaChartExample />
            <Text variant='title' marginBottom={spacings.m}>
                Quadrant Chart Example
            </Text>
            <QuadrantChartExample />
            <Text variant='title' marginBottom={spacings.m}>
                Horizontal Bar Example
            </Text>
            <Box marginBottom={spacings.m}>
                <HorizontalBar percentage={0.6} colors={{ background: '#F8D9FE', bar: '#AF43F7' }} />
            </Box>
        </>
    );
}
