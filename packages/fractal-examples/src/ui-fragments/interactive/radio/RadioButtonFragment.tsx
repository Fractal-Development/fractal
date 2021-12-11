import React, { useState } from 'react';
import { useTheme, Box, Text, RadioButton } from '@bma98/fractal-ui';
import { getTitleTextAccessibilityProps } from '../../accessibility/getTitleTextAccessibilityProps';

export function RadioButtonFragment(): JSX.Element {
    const { spacings } = useTheme();
    const [activeButton, setActiveButton] = useState(false);

    return (
        <>
            <Text variant="title" {...getTitleTextAccessibilityProps(1)}>
                Radio Button Fragment
            </Text>
            <Box marginTop={spacings.s} marginBottom={spacings.xl}>
                <RadioButton
                    label="Radio Button"
                    value="Button 1"
                    active={activeButton}
                    onPress={() => setActiveButton((active) => !active)}
                />
            </Box>
        </>
    );
}
