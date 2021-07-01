import React from 'react';
import { useTheme, Box, TextField, Text } from '@bma98/fractal-ui';

export function TextFieldFragment(): JSX.Element {
    const { spacings } = useTheme();

    return (
        <>
            <Text variant={'title'}>Text Field Example</Text>
            <Box marginTop={spacings.s} marginBottom={spacings.xl}>
                <TextField placeholder='Escribe aquí' />
            </Box>
        </>
    );
}
