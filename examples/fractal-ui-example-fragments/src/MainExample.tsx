import React from 'react';
import { Background, Box, PaddingLayer, Text, FractalAppRoot, useTheme, ScrollView } from '@bma98/fractal-ui';
import { ChartsExamples } from './charts/ChartsExamples';

export function MainExample() {
    const { spacings } = useTheme();
    return (
        <FractalAppRoot>
            <Background>
                <PaddingLayer>
                    <ScrollView>
                        <Box alignItems={'center'} marginBottom={spacings.m}>
                            <Text>Welcome to Fractal UI!</Text>
                        </Box>
                        <ChartsExamples />
                    </ScrollView>
                </PaddingLayer>
            </Background>
        </FractalAppRoot>
    );
}
