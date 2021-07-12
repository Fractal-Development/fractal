import React from 'react';
import { useTheme, Box, Separator, Text } from '@bma98/fractal-ui';
import { getTitleTextAccessibilityProps } from '../accessibility/getTitleTextAccessibilityProps';
import { getBoxAccessibilityProps } from './accessibility/getBoxAccessibilityProps';
import { getTextAccessibilityProps } from './accessibility/getTextAccessibilityProps';

export function BoxContentFragment(): JSX.Element {
    const { spacings } = useTheme();

    return (
        <>
            <Text variant={'title'} {...getTitleTextAccessibilityProps(1)}>
                Box Fragment
            </Text>
            <Box marginTop={spacings.s} marginBottom={spacings.xl} {...getBoxAccessibilityProps()}>
                <Text variant={'normal'} marginBottom={spacings.m} {...getTextAccessibilityProps()}>
                    Use it to separate your components into blocks.
                </Text>
                <Separator marginBottom={spacings.m} />
                <Text variant={'normal'} {...getTextAccessibilityProps()}>
                    Like this.
                </Text>
            </Box>
        </>
    );
}
