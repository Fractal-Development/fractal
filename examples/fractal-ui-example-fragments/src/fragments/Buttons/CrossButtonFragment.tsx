import React from 'react';
import { useTheme, Box, CrossButton, Text } from '@bma98/fractal-ui';

export function CrossButtonFragment(): JSX.Element {
    const { spacings } = useTheme();

    return (
        <>
            <Text variant={'title'}>Cross Button Example</Text>
            <Box alignContent={'center'} marginTop={spacings.s} marginBottom={spacings.xl}>
                <CrossButton onPress={() => console.log('Cross button pressed')} />
            </Box>
        </>
    );
}
