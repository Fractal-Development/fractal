import React from 'react';
import { useTheme, Box, Text } from '@fractal/fractal-ui';
import { getTitleTextAccessibilityProps } from '../accessibility/getTitleTextAccessibilityProps';
import { getTextExampleAccessibilityProps } from './accessibility/getTextExampleAccessibilityProps';

export function TextsFragment(): JSX.Element {
    const { colors, spacings } = useTheme();

    return (
        <>
            <Text variant='title' {...getTitleTextAccessibilityProps(1)}>
                Texts Fragment
            </Text>
            <Box marginTop={spacings.s} marginBottom={spacings.xl} {...getTextExampleAccessibilityProps()}>
                <Text variant='title' marginBottom={spacings.s}>
                    Title text.
                </Text>
                <Text variant='title2' marginBottom={spacings.s}>
                    Title2 text.
                </Text>
                <Text variant='title3' marginBottom={spacings.s}>
                    Title3 text.
                </Text>
                <Text variant='subtitle' marginBottom={spacings.s}>
                    Subtitle text.
                </Text>
                <Text variant='placeholder' marginBottom={spacings.s}>
                    Placeholder text.
                </Text>
                <Text variant='normal' marginBottom={spacings.s}>
                    Normal text.
                </Text>
                <Text variant='label' marginBottom={spacings.s}>
                    Label text..
                </Text>
                <Text variant='small' marginBottom={spacings.s}>
                    Small text.
                </Text>
                <Text variant='smallLabel' marginBottom={spacings.s}>
                    Small label text.
                </Text>
                <Text variant='button' marginBottom={spacings.s}>
                    Button text.
                </Text>
                <Text variant='textButton' marginBottom={spacings.s}>
                    Text button text.
                </Text>
                <Text variant='normal' selectable marginBottom={spacings.s}>
                    Selectable text.
                </Text>
                <Text variant='normal' selectable selectionColor={colors.alternativeInteractiveColor} marginBottom={spacings.s}>
                    Selectable text with different color (Only on Android).
                </Text>
            </Box>
        </>
    );
}
