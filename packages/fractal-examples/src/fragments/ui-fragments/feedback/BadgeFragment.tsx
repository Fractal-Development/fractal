import React from 'react';
import { useTheme, Box, Text, Badge } from '@bma98/fractal-ui';
import { getTitleTextAccessibilityProps } from '../accessibility/getTitleTextAccessibilityProps';

export function BadgeFragment(): JSX.Element {
    const { spacings } = useTheme();

    return (
        <>
            <Text variant="title" {...getTitleTextAccessibilityProps(1)}>
                Bagde Fragment
            </Text>
            <Box marginTop={spacings.s} marginBottom={spacings.xl}>
                <Badge variant="success">Some message</Badge>
            </Box>
        </>
    );
}
