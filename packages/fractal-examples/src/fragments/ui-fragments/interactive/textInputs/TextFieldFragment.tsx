import React from 'react';
import { useTheme, Box, TextField, Text } from '@fractal-software/fractal-ui';
import { getTitleTextAccessibilityProps } from '../../accessibility/getTitleTextAccessibilityProps';

export function TextFieldFragment(): JSX.Element {
    const { spacings } = useTheme();

    return (
        <>
            <Text variant='title' {...getTitleTextAccessibilityProps(1)}>
                Text Field Fragment
            </Text>
            <Box marginTop={spacings.s} marginBottom={spacings.xl}>
                <TextField placeholder='Escribe aquí' />
            </Box>
        </>
    );
}
