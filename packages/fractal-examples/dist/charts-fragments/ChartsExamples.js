import React from 'react';
import { Text, useTheme, Box } from '@bma98/fractal-ui';
import { HorizontalBar } from '@bma98/fractal-charts';
import { PieChartExample } from './PieChartExample';
import { AreaChartExample } from './AreaChartExample';
import { QuadrantChartExample } from './QuadrantChartExample';
export function ChartsExamples() {
    const { spacings } = useTheme();
    const randomColor = () => ('#' + ((Math.random() * 0xffffff) << 0).toString(16) + '000000').slice(0, 7);
    const pieData = [
        {
            value: 50,
            color: randomColor()
        },
        {
            value: 10,
            color: randomColor()
        },
        {
            value: 40,
            color: randomColor()
        }
    ];
    return (React.createElement(React.Fragment, null,
        React.createElement(Text, { variant: 'title', marginBottom: spacings.m }, "Pie Chart Example"),
        React.createElement(PieChartExample, { data: pieData }),
        React.createElement(Text, { variant: 'title', marginBottom: spacings.m }, "Area Chart Example"),
        React.createElement(AreaChartExample, null),
        React.createElement(Text, { variant: 'title', marginBottom: spacings.m }, "Quadrant Chart Example"),
        React.createElement(QuadrantChartExample, null),
        React.createElement(Text, { variant: 'title', marginBottom: spacings.m }, "Horizontal Bar Example"),
        React.createElement(Box, { marginBottom: spacings.m },
            React.createElement(HorizontalBar, { percentage: 0.6, colors: { background: '#F8D9FE', bar: '#AF43F7' } }))));
}
//# sourceMappingURL=ChartsExamples.js.map