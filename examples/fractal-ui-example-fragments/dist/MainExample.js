import React from 'react';
import { Background, Box, PaddingLayer, Text, FractalAppRoot, useTheme } from '@bma98/fractal-ui';
import { ChartsExamples } from './charts/ChartsExamples';
export function MainExample() {
    const { spacings } = useTheme();
    return (React.createElement(FractalAppRoot, null,
        React.createElement(Background, null,
            React.createElement(PaddingLayer, null,
                React.createElement(Box, { alignItems: 'center', marginBottom: spacings.m },
                    React.createElement(Text, null, "Welcome to Fractal UI!")),
                React.createElement(ChartsExamples, null)))));
}
//# sourceMappingURL=MainExample.js.map