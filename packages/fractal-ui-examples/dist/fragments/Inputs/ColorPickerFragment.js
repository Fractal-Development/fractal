import React, { useState } from 'react';
import { useTheme, Box, ColorPicker, Text } from '@bma98/fractal-ui';
export function ColorPickerFragment() {
    const { colors, spacings } = useTheme();
    const [selectedColor, setSelectedColor] = useState(colors.successInteractiveColor);
    return (React.createElement(React.Fragment, null,
        React.createElement(Text, { variant: 'title' }, "Color Picker Example"),
        React.createElement(Box, { marginTop: spacings.s, marginBottom: spacings.xl },
            React.createElement(ColorPicker, { value: selectedColor, defaultValue: selectedColor, onColorChange: (color) => setSelectedColor(color), colors: [
                    colors.mainInteractiveColor,
                    colors.alternativeInteractiveColor,
                    colors.successInteractiveColor,
                    colors.dangerInteractiveColor,
                    colors.warningInteractiveColor
                ] }))));
}
//# sourceMappingURL=ColorPickerFragment.js.map