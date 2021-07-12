import React from 'react';
import { useTheme, Box, Text, OptionsButton } from '@bma98/fractal-ui';
import { getTitleTextAccessibilityProps } from '../accessibility/getTitleTextAccessibilityProps';

export function OptionsButtonFragment(): JSX.Element {
    const { spacings } = useTheme();

    return (
        <>
            <Text variant={'title'} {...getTitleTextAccessibilityProps(1)}>
                Options Button Example
            </Text>
            <Box marginTop={spacings.s} marginBottom={spacings.xl}>
                <OptionsButton />
            </Box>
        </>
    );
}
