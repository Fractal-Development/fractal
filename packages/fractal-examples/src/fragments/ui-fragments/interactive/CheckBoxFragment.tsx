import React, { useState } from 'react';
import { useTheme, Box, CheckBox, Text } from '@fractal-software/fractal-ui';
import { getTitleTextAccessibilityProps } from '../accessibility/getTitleTextAccessibilityProps';

export function CheckBoxFragment(): JSX.Element {
    const { spacings } = useTheme();
    const [isChecked, setIsChecked] = useState(false);

    return (
        <>
            <Text variant='title' {...getTitleTextAccessibilityProps(1)}>
                Check Box Fragment
            </Text>
            <Box marginTop={spacings.s} marginBottom={spacings.xl}>
                <CheckBox value={isChecked} onValueChange={(value) => setIsChecked(value)} label='Selectable' />
            </Box>
        </>
    );
}
