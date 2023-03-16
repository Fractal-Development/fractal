import React from 'react';
import { useTheme, Box, TimePicker, Text } from '@fractal-software/fractal-ui';
import { getTitleTextAccessibilityProps } from '../../accessibility/getTitleTextAccessibilityProps';

export function TimePickerFragment(): JSX.Element {
    const { spacings } = useTheme();

    return (
        <>
            <Text variant='title' {...getTitleTextAccessibilityProps(1)}>
                Time Picker Fragment
            </Text>
            <Box marginTop={spacings.s} marginBottom={spacings.xl}>
                <TimePicker iosDoneText='Done' onChange={(date) => console.log(date.toLocaleDateString())} />
            </Box>
        </>
    );
}
