import React from 'react';
import { Box, Layer, useTheme } from '@bma98/fractal-ui';
import { YAxis, XAxis, AreaChart } from '@bma98/fractal-charts';
const areaData = [50, 10, 40, 80, 85, 88, 35, 53, 24, 50];
const textProps = { fontSize: 10 };
const verticalContentInset = { top: 10, bottom: 10 };
const xAxisHeight = 30;
const xLabels = ['04 Jun', '11 Jun', '18 Jun', '25 Jun', '02 Jul', '09 Jul', '16 Jul', '23 Jul', '30 Jul', '6 Ago', '13 Ago'];
export function AreaChartExample() {
    const { spacings } = useTheme();
    return (React.createElement(Box, { height: 220, marginBottom: spacings.m, flexDirection: "row" },
        React.createElement(YAxis, { data: areaData, marginBottom: xAxisHeight, contentInset: verticalContentInset, textProps: textProps }),
        React.createElement(Layer, { flex: 1, marginLeft: 10 },
            React.createElement(AreaChart, { flex: 1, contentInset: verticalContentInset, areaColor: "rgb(134, 65, 244)", gradientConfig: {
                    startColor: 'rgb(134, 65, 244)',
                    startOpacity: 0.8,
                    endColor: 'rgb(134, 65, 244)',
                    endOpacity: 0.2
                }, data: areaData }),
            React.createElement(XAxis, { marginLeft: -10, marginRight: -10, paddingTop: 8, height: xAxisHeight, data: areaData, formatLabel: (_, index) => xLabels[index], contentInset: { left: 10, right: 10 }, textProps: textProps }))));
}
//# sourceMappingURL=AreaChartExample.js.map