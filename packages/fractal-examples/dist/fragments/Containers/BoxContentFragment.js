import React from 'react';
import { useTheme, Box, Separator, Text } from '@bma98/fractal-ui';
import { getBoxAccessibilityProps } from './accessibility/getBoxAccessibilityProps';
import { getTextAccessibilityProps } from './accessibility/getTextAccessibilityProps';
export function BoxContentFragment() {
    const { spacings } = useTheme();
    return (React.createElement(React.Fragment, null,
        React.createElement(Text, { variant: 'title' }, "Box Example"),
        React.createElement(Box, Object.assign({ marginTop: spacings.s, marginBottom: spacings.xl }, getBoxAccessibilityProps()),
            React.createElement(Text, Object.assign({ variant: 'normal', marginBottom: spacings.m }, getTextAccessibilityProps()), "Use it to separate your components into blocks."),
            React.createElement(Separator, { marginBottom: spacings.m }),
            React.createElement(Text, Object.assign({ variant: 'normal' }, getTextAccessibilityProps()), "Like this."))));
}
//# sourceMappingURL=BoxContentFragment.js.map