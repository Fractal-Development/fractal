import React from 'react';
import { useTheme, Box, Separator, Text } from '@bma98/fractal-ui';
import { getSeparatorExampleAccessibilityProps } from './accessibility/getSeparatorExampleAccessibilityProps';
import { getTextAccessibilityProps } from './accessibility/getTextAccessibilityProps';
export function SeparatorsFragment() {
    const { spacings } = useTheme();
    return (React.createElement(React.Fragment, null,
        React.createElement(Text, { variant: 'title' }, "Separator Example"),
        React.createElement(Box, Object.assign({ marginTop: spacings.s, marginBottom: spacings.xl }, getSeparatorExampleAccessibilityProps()),
            React.createElement(Text, Object.assign({ variant: 'normal', marginBottom: spacings.s }, getTextAccessibilityProps()), "Below is the separator that is more visible with the isAtBackgroundLevel variable"),
            React.createElement(Separator, { isAtBackgroundLevel: true, marginBottom: spacings.s }),
            React.createElement(Text, Object.assign({ variant: 'normal', marginBottom: spacings.s }, getTextAccessibilityProps()), "Below is the separator that is less visible without the isAtBackgroundLevel variable"),
            React.createElement(Separator, { marginBottom: spacings.s }),
            React.createElement(Text, Object.assign({ variant: 'normal' }, getTextAccessibilityProps()), "Some text."))));
}
//# sourceMappingURL=SeparatorsFragment.js.map