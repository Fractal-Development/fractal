import React from 'react';
import { useTheme, Box, DatePicker, Text } from '@bma98/fractal-ui';

export function DatePickerFragment(): JSX.Element {
    const { spacings } = useTheme();

    return (
        <>
            <Text variant={'title'}>Date Picker Example</Text>
            <Box marginTop={spacings.s} marginBottom={spacings.xl}>
                <DatePicker iosDoneText='Done' onChange={(date) => console.log('Local Date: ', date.toLocaleDateString())} />
            </Box>
        </>
    );
}
