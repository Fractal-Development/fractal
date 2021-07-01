import React from 'react';
import { useTheme, Box, Separator, Text } from '@bma98/fractal-ui';

export function BoxContentFragment(): JSX.Element {
    const { spacings } = useTheme();

    return (
        <>
            <Text variant={'title'}>Box Example</Text>
            <Box marginTop={spacings.s} marginBottom={spacings.xl}>
                <Text variant={'normal'} marginBottom={spacings.m}>
                    Use it to separate your components into blocks.
                </Text>
                <Separator marginBottom={spacings.m} />
                <Text variant={'normal'}>Like this.</Text>
            </Box>
        </>
    );
}
