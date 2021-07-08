import React from 'react';
import { useTheme, Box, LoadingBackground, Text } from '@bma98/fractal-ui';
import { getTitleTextAccessibilityProps } from './accessibility/getTitleTextAccessibilityProps';

export function LoadingBackgroundFragment(): JSX.Element {
    const { spacings } = useTheme();

    return (
        <>
            <Text variant={'title'} {...getTitleTextAccessibilityProps(1)}>Loading Background</Text>
            <Box alignItems={'center'} marginTop={spacings.s} marginBottom={spacings.xl}>
                <LoadingBackground width={'40%'} height={'40%'} />
            </Box>
        </>
    );
}