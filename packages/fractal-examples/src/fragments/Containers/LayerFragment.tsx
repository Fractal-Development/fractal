import React from 'react';
import { useTheme, Box, Layer, Text, PaddingLayer, MarginLayer, HorizontalLayer } from '@bma98/fractal-ui';
import { getHorizontalLayerAccessibilityProps } from './accessibility/getHorizontalLayerAccessibilityProps';
import { getMarginLayerAccessibilityProps } from './accessibility/getMarginLayerAccessibilityProps';
import { getPaddingLayerAccessibilityProps } from './accessibility/getPaddingLayerAccessibilityProps';

export function LayerFragment(): JSX.Element {
    const { colors, spacings } = useTheme();

    return (
        <>
            <Text variant={'title'}>Layer Examples</Text>
            <Layer marginTop={spacings.s} marginBottom={spacings.xl}>
                <HorizontalLayer height={150} borderStyle={'solid'} borderWidth={2} borderColor={colors.black} {...getHorizontalLayerAccessibilityProps()}>
                    <Box alignItems={'center'} justifyContent={'center'} width={'50%'}>
                        <Text variant={'subtitle'}>Horizontal Layer</Text>
                    </Box>
                    <Box alignItems={'center'} justifyContent={'center'} width={'50%'}>
                        <Text variant={'subtitle'}>Horizontal Layer</Text>
                    </Box>
                </HorizontalLayer>
                <MarginLayer height={150} borderStyle={'solid'} borderWidth={2} borderColor={colors.black} {...getMarginLayerAccessibilityProps()}>
                    <Box alignItems={'center'} justifyContent={'center'} width={'100%'} height={'50%'}>
                        <Text variant={'subtitle'}>Margin Layer</Text>
                    </Box>
                    <Box alignItems={'center'} justifyContent={'center'} width={'100%'} height={'50%'}>
                        <Text variant={'subtitle'}>Margin Layer</Text>
                    </Box>
                </MarginLayer>
                <PaddingLayer height={150} borderStyle={'solid'} borderWidth={2} borderColor={colors.black} {...getPaddingLayerAccessibilityProps()}>
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