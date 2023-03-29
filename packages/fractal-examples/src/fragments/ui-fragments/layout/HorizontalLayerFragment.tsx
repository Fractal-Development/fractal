import React from 'react';
import { useTheme, Box, Layer, Text, HorizontalLayer } from '@fractal-software/fractal-ui';
import { getTitleTextAccessibilityProps } from '../accessibility/getTitleTextAccessibilityProps';
import { getHorizontalLayerAccessibilityProps } from './accessibility/getHorizontalLayerAccessibilityProps';

export function HorizontalLayerFragment(): JSX.Element {
    const { colors, spacings } = useTheme();

    return (
        <>
            <Text variant='title' {...getTitleTextAccessibilityProps(1)}>
                Horizontal Layer Fragment
            </Text>
            <Layer marginTop={spacings.s} marginBottom={spacings.xl}>
                <HorizontalLayer
                    height={150}
                    borderStyle='solid'
                    borderWidth={2}
                    borderColor={colors.black}
                    {...getHorizontalLayerAccessibilityProps()}
                >
                    <Box alignItems='center' justifyContent='center' width='50%'>
                        <Text variant='subtitle'>Horizontal Layer</Text>
                    </Box>
                    <Box alignItems='center' justifyContent='center' width='50%'>
                        <Text variant='subtitle'>Horizontal Layer</Text>
                    </Box>
                </HorizontalLayer>
            </Layer>
        </>
    );
}
