import React from 'react';
import { useTheme, Box, TimePicker, Text } from '../../../src';

export function TimePickerFragment(): JSX.Element {
    const { spacings } = useTheme();

    return (
        <>
            <Text variant={'title'}>Time Picker Example</Text>
            <Box marginTop={spacings.s} marginBottom={spacings.xl}>
                <TimePicker iosDoneText='Done' onChange={(date) => console.log(date.toLocaleDateString())} />
            </Box>
        </>
    );
}
