import React, { useCallback } from 'react';
import { useSetThemeIdentifier, useTheme, Box, Button, Text } from '@bma98/fractal-ui';
import { getTitleTextAccessibilityProps } from './accessibility/getTitleTextAccessibilityProps';

export function ThemeSwapper(): JSX.Element {
    const { spacings } = useTheme();
    const setThemeIdentifier = useSetThemeIdentifier();
    const handlePress = useCallback(() => setThemeIdentifier((current) => (current === 'light' ? 'dark' : 'light')), [setThemeIdentifier]);

    return (
        <>
            <Text variant={'title'} {...getTitleTextAccessibilityProps(1)}>Swap Theme</Text>
            <Box marginTop={spacings.s} marginBottom={spacings.xl}>
                <Button onPress={handlePress} variant='alternative' text='Swap Theme' />
            </Box>
        </>
    );
}
