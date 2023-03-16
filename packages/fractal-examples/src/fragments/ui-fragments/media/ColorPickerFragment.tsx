import React, { useState } from 'react';
import { useTheme, Box, ColorPicker, Text } from '@fractal-software/fractal-ui';
import { getTitleTextAccessibilityProps } from '../accessibility/getTitleTextAccessibilityProps';

export function ColorPickerFragment(): JSX.Element {
    const { colors, spacings } = useTheme();
    const [selectedColor, setSelectedColor] = useState(colors.successInteractiveColor);

    return (
        <>
            <Text variant='title' {...getTitleTextAccessibilityProps(1)}>
                Color Picker Fragment
            </Text>
            <Box marginTop={spacings.s} marginBottom={spacings.xl}>
                <ColorPicker
                    value={selectedColor}
                    defaultValue={selectedColor}
                    onColorChange={(color) => setSelectedColor(color)}
                    colors={[
                        colors.mainInteractiveColor,
                        colors.alternativeInteractiveColor,
                        colors.successInteractiveColor,
                        colors.dangerInteractiveColor,
                        colors.warningInteractiveColor
                    ]}
                />
            </Box>
        </>
    );
}
