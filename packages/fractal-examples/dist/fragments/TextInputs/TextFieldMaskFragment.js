import React from 'react';
import { useTheme, Box, TextFieldMask, Text } from '@bma98/fractal-ui';
import { getTitleTextAccessibilityProps } from '../accessibility/getTitleTextAccessibilityProps';
export function TextFieldMaskFragment() {
    const { spacings } = useTheme();
    return (React.createElement(React.Fragment, null,
        React.createElement(Text, Object.assign({ variant: 'title' }, getTitleTextAccessibilityProps(1)), "Text Field Mask Example"),
        React.createElement(Box, { marginTop: spacings.s, marginBottom: spacings.xl },
            React.createElement(TextFieldMask, { type: 'money', placeholder: 'Monto', marginBottom: spacings.s, onChangeText: (maskedText, rawText) => console.log({ maskedText, rawText }) }),
            React.createElement(TextFieldMask, { type: 'phone', placeholder: 'Numero telefono', onChangeText: (maskedText, rawText) => console.log({ maskedText, rawText }) }))));
}
//# sourceMappingURL=TextFieldMaskFragment.js.map