import React, { useState } from 'react';
import { useTheme, Box, Switch, Text } from '@fractal-software/fractal-ui';
import { getTitleTextAccessibilityProps } from '../accessibility/getTitleTextAccessibilityProps';

export function SwitchFragment(): JSX.Element {
    const { spacings } = useTheme();
    const [isEnabled, setIsEnabled] = useState(false);

    return (
        <>
            <Text variant='title' {...getTitleTextAccessibilityProps(1)}>
                Switch Fragment
            </Text>
            <Box marginTop={spacings.s} marginBottom={spacings.xl}>
                <Switch value={isEnabled} onValueChange={(value) => setIsEnabled(value)} />
            </Box>
        </>
    );
}
