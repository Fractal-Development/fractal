import React, { useState } from 'react';
import { useTheme, Box, Switch, Text } from '@bma98/fractal-ui';

export function SwitchFragment(): JSX.Element {
    const { spacings } = useTheme();
    const [isEnabled, setIsEnabled] = useState(false);

    return (
        <>
            <Text variant={'title'}>Switch Example</Text>
            <Box marginTop={spacings.s} marginBottom={spacings.xl}>
                <Switch value={isEnabled} onValueChange={(value) => setIsEnabled(value)} />
            </Box>
        </>
    );
}
