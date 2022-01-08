import React from 'react';
import { useTheme, Box, Layer, Avatar, Text } from '@bma98/fractal-ui';
import { getTitleTextAccessibilityProps } from '../accessibility/getTitleTextAccessibilityProps';

export function AvatarFragment(): JSX.Element {
    const { spacings } = useTheme();

    return (
        <>
            <Text variant="title" {...getTitleTextAccessibilityProps(1)}>
                Avatar Fragment
            </Text>
            <Layer marginTop={spacings.s} marginBottom={spacings.xl}>
                <Box marginBottom={spacings.s} flexDirection="row">
                    <Avatar source="https://picsum.photos/id/370/200" label="Avatar" />
                </Box>
            </Layer>
        </>
    );
}
