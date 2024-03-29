import React from 'react';
import { useTheme, Box, DatePicker, Text } from '@fractal-software/fractal-ui';
import { getTitleTextAccessibilityProps } from '../../accessibility/getTitleTextAccessibilityProps';

export function DatePickerFragment(): JSX.Element {
    const { spacings } = useTheme();

    return (
        <>
            <Text variant='title' {...getTitleTextAccessibilityProps(1)}>
                Date Picker Fragment
            </Text>
            <Box marginTop={spacings.s} marginBottom={spacings.xl}>
                <DatePicker iosDoneText='Done' onChange={(date) => console.log('Local Date: ', date.toLocaleDateString())} />
            </Box>
        </>
    );
}
