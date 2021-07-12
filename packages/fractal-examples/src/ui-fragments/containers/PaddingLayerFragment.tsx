import React from 'react';
import { useTheme, Box, Layer, Text, PaddingLayer } from '@bma98/fractal-ui';
import { getTitleTextAccessibilityProps } from '../accessibility/getTitleTextAccessibilityProps';
import { getPaddingLayerAccessibilityProps } from './accessibility/getPaddingLayerAccessibilityProps';

export function PaddingLayerFragment(): JSX.Element {
    const { colors, spacings } = useTheme();

    return (
        <>
            <Text variant={'title'} {...getTitleTextAccessibilityProps(1)}>
                Padding Layer Example
            </Text>
            <Layer marginTop={spacings.s} marginBottom={spacings.xl}>
                <PaddingLayer
                    height={150}
                    borderStyle={'solid'}
                    borderWidth={2}
                    borderColor={colors.black}
                    {...getPaddingLayerAccessibilityProps()}
                >
                    <Box alignItems={'center'} justifyContent={'center'} width={'100%'} height={'50%'}>
                        <Text variant={'subtitle'}>Padding Layer</Text>
                    </Box>
                    <Box alignItems={'center'} justifyContent={'center'} width={'100%'} height={'50%'}>
                        <Text variant={'subtitle'}>Padding Layer</Text>
                    </Box>
                </PaddingLayer>
            </Layer>
        </>
    );
}
