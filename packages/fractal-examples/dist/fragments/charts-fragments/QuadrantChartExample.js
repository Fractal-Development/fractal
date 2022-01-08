import React from 'react';
import { Box, useTheme } from '@bma98/fractal-ui';
import { QuadrantChart } from '@bma98/fractal-charts';
import { CalmFaceIcon, ExcitedFaceIcon, FrustratedFaceIcon, DiscouragedFaceIcon } from './icons';
export function QuadrantChartExample() {
    const { spacings } = useTheme();
    const renderIcon = (color, size, activeQuadrant) => {
        if (activeQuadrant === 'first') {
            return React.createElement(CalmFaceIcon, { fill: color, width: size, height: size });
        }
        if (activeQuadrant === 'second') {
            return React.createElement(ExcitedFaceIcon, { fill: color, width: size, height: size });
        }
        if (activeQuadrant === 'third') {
            return React.createElement(FrustratedFaceIcon, { fill: color, width: size, height: size });
        }
        return React.createElement(DiscouragedFaceIcon, { fill: color, width: size, height: size });
    };
    return (React.createElement(Box, { marginBottom: spacings.m, maxWidth: 400 },
        React.createElement(QuadrantChart, { height: 300, data: [24, 1, 2, 3], positiveYAxisLabel: 'S\u00ED acepto', negativeYAxisLabel: 'No acepto', positiveXAxisLabel: 'S\u00ED puedo cambiar', negativeXAxisLabel: 'No puedo cambiar', firstQuadrantLabel: 'Tranquilidad/Paz', secondQuadrantLabel: 'Entusiasmo/Alegr\u00EDa', thirdQuadrantLabel: 'Frustraci\u00F3n/Enojo', fourthQuadrantLabel: 'Des\u00E1nimo/Apat\u00EDa', renderQuadrantIcon: renderIcon, showIconInQuadrant: 'first', colors: {
                firstQuadrant: '#fec201',
                secondQuadrant: '#00a5b5',
                thirdQuadrant: '#fd4e15',
                fourthQuadrant: '#10164a'
            } })));
}
//# sourceMappingURL=QuadrantChartExample.js.map