import React from 'react';
import { Background, Box, PaddingLayer, Text, FractalAppRoot, useTheme } from '@bma98/fractal-ui';
import { ChartsExamples } from './charts/ChartsExamples';

export function MainExample() {
    const { spacings } = useTheme();
    return (
        <FractalAppRoot handleThemeManually>
            <Background>
                <PaddingLayer>
                    <Box alignItems={'center'} marginBottom={spacings.m}>
                        <Text>Welcome to Fractal UI!</Text>
                    </Box>
                    <ChartsExamples />
                </PaddingLayer>
            </Background>
        </FractalAppRoot>
    );
}
