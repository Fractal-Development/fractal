import React from 'react';
import { useTheme, Box, Separator, Text } from '@fractal-software/fractal-ui';
import { getTitleTextAccessibilityProps } from '../../accessibility/getTitleTextAccessibilityProps';
import { getSeparatorExampleAccessibilityProps } from './accessibility/getSeparatorExampleAccessibilityProps';
import { getTextAccessibilityProps } from './accessibility/getTextAccessibilityProps';

export function SeparatorFragment(): JSX.Element {
    const { spacings } = useTheme();

    return (
        <>
            <Text variant='title' {...getTitleTextAccessibilityProps(1)}>
                Separator Fragment
            </Text>
            <Box marginTop={spacings.s} marginBottom={spacings.xl} {...getSeparatorExampleAccessibilityProps()}>
                <Text variant='normal' marginBottom={spacings.s} {...getTextAccessibilityProps()}>
                    Below is the separator that is more visible with the isAtBackgroundLevel variable
                </Text>
                <Separator isAtBackgroundLevel marginBottom={spacings.s} />
                <Text variant='normal' marginBottom={spacings.s} {...getTextAccessibilityProps()}>
                    Below is the separator that is less visible without the isAtBackgroundLevel variable
                </Text>
                <Separator marginBottom={spacings.s} />
                <Text variant='normal' {...getTextAccessibilityProps()}>
                    Some text.
                </Text>
            </Box>
        </>
    );
}
