import React from 'react';
import { useTheme, Box, OptionsButton, Text } from '@bma98/fractal-ui';
import { getTitleTextAccessibilityProps } from '../accessibility/getTitleTextAccessibilityProps';

export function OptionsMenuButtonFragment(): JSX.Element {
    const { spacings } = useTheme();

    return (
        <>
            <Text variant={'title'} {...getTitleTextAccessibilityProps(1)}>
                Options Menu Button Example
            </Text>
            <Box marginTop={spacings.s} marginBottom={spacings.xl}>
                <OptionsButton />
            </Box>
        </>
    );
}
