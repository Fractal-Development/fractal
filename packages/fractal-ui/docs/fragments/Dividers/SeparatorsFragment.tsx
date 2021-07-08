import React from 'react';
import { useTheme, Box, Separator, Text } from '../../../src';
import { getSeparatorExampleAccessibilityProps } from './accessibility/getSeparatorExampleAccessibilityProps';
import { getTextAccessibilityProps } from './accessibility/getTextAccessibilityProps';

export function SeparatorsFragment(): JSX.Element {
    const { spacings } = useTheme();

    return (
        <>
            <Text variant={'title'}>Separator Example</Text>
            <Box marginTop={spacings.s} marginBottom={spacings.xl} {...getSeparatorExampleAccessibilityProps()}>
                <Text variant={'normal'} marginBottom={spacings.s} {...getTextAccessibilityProps()}>
                    Below is the separator that is more visible with the isAtBackgroundLevel variable
                </Text>
                <Separator isAtBackgroundLevel marginBottom={spacings.s} />
                <Text variant={'normal'} marginBottom={spacings.s} {...getTextAccessibilityProps()}>
                    Below is the separator that is less visible without the isAtBackgroundLevel variable
                </Text>
                <Separator marginBottom={spacings.s} />
                <Text variant={'normal'} {...getTextAccessibilityProps()}>
                    Some text.
                </Text>
            </Box>
        </>
    );
}
