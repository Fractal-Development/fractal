import React from 'react';
import { useTheme, Box, Layer, Text, MarginLayer } from '@bma98/fractal-ui';
import { getTitleTextAccessibilityProps } from '../accessibility/getTitleTextAccessibilityProps';
import { getMarginLayerAccessibilityProps } from './accessibility/getMarginLayerAccessibilityProps';

export function MarginLayerFragment(): JSX.Element {
    const { colors, spacings } = useTheme();

    return (
        <>
            <Text variant={'title'} {...getTitleTextAccessibilityProps(1)}>
                Margin Layer Fragment
            </Text>
            <Layer marginTop={spacings.s} marginBottom={spacings.xl}>
                <MarginLayer
                    height={150}
                    borderStyle={'solid'}
                    borderWidth={2}
                    borderColor={colors.black}
                    {...getMarginLayerAccessibilityProps()}
                >
                    <Box alignItems={'center'} justifyContent={'center'} width={'100%'} height={'50%'}>
                        <Text variant={'subtitle'}>Margin Layer</Text>
                    </Box>
                    <Box alignItems={'center'} justifyContent={'center'} width={'100%'} height={'50%'}>
                        <Text variant={'subtitle'}>Margin Layer</Text>
                    </Box>
                </MarginLayer>
            </Layer>
        </>
    );
}
