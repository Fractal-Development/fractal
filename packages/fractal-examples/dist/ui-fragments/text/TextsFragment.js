import React from 'react';
import { useTheme, Box, Text } from '@bma98/fractal-ui';
import { getTitleTextAccessibilityProps } from '../accessibility/getTitleTextAccessibilityProps';
import { getTextExampleAccessibilityProps } from './accessibility/getTextExampleAccessibilityProps';
export function TextsFragment() {
    const { colors, spacings } = useTheme();
    return (React.createElement(React.Fragment, null,
        React.createElement(Text, Object.assign({ variant: 'title' }, getTitleTextAccessibilityProps(1)), "Texts Fragment"),
        React.createElement(Box, Object.assign({ marginTop: spacings.s, marginBottom: spacings.xl }, getTextExampleAccessibilityProps()),
            React.createElement(Text, { variant: 'title', marginBottom: spacings.s }, "Title text."),
            React.createElement(Text, { variant: 'title2', marginBottom: spacings.s }, "Title2 text."),
            React.createElement(Text, { variant: 'title3', marginBottom: spacings.s }, "Title3 text."),
            React.createElement(Text, { variant: 'subtitle', marginBottom: spacings.s }, "Subtitle text."),
            React.createElement(Text, { variant: 'placeholder', marginBottom: spacings.s }, "Placeholder text."),
            React.createElement(Text, { variant: 'normal', marginBottom: spacings.s }, "Normal text."),
            React.createElement(Text, { variant: 'label', marginBottom: spacings.s }, "Label text.."),
            React.createElement(Text, { variant: 'small', marginBottom: spacings.s }, "Small text."),
            React.createElement(Text, { variant: 'smallLabel', marginBottom: spacings.s }, "Small label text."),
            React.createElement(Text, { variant: 'button', marginBottom: spacings.s }, "Button text."),
            React.createElement(Text, { variant: 'textButton', marginBottom: spacings.s }, "Text button text."),
            React.createElement(Text, { variant: 'normal', selectable: true, marginBottom: spacings.s }, "Selectable text."),
            React.createElement(Text, { variant: 'normal', selectable: true, selectionColor: colors.alternativeInteractiveColor, marginBottom: spacings.s }, "Selectable text with different color (Only on Android)."))));
}
//# sourceMappingURL=TextsFragment.js.map