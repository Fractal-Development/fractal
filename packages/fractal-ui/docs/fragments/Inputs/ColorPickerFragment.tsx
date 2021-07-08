import React, { useState } from 'react';
import { useTheme, Box, ColorPicker, Text } from '../../../src';

export function ColorPickerFragment(): JSX.Element {
    const { colors, spacings } = useTheme();
    const [selectedColor, setSelectedColor] = useState(colors.successInteractiveColor);

    return (
        <>
            <Text variant={'title'}>Color Picker Example</Text>
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
