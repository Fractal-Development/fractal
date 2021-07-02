import React, { useCallback } from 'react';
import { Button, useSetThemeIdentifier, Text } from '@bma98/fractal-ui';

export function ThemeSwapper(): JSX.Element {
    const setThemeIdentifier = useSetThemeIdentifier();
    const handlePress = useCallback(() => setThemeIdentifier((current) => (current === 'light' ? 'dark' : 'light')), [setThemeIdentifier]);

    return (
        <>
            <Text variant={'title'}>Swap Theme</Text>
            <Button onPress={handlePress} variant='alternative' text='Swap Theme' />
        </>
    );
}
