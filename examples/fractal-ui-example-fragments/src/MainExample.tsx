import React from 'react';
import { Background, Box, PaddingLayer, Text, FractalAppRoot } from '@bma98/fractal-ui';

export function MainExample() {
    return (
        <FractalAppRoot>
            <Background>
                <PaddingLayer>
                    <Box alignItems={'center'}>
                        <Text>Welcome to Fractal UI!</Text>
                    </Box>
                </PaddingLayer>
            </Background>
        </FractalAppRoot>
    );
}
