import React from 'react';
import { useTheme, Box, TextButton, Text, SearchIcon } from '@bma98/fractal-ui';
import { getTitleTextAccessibilityProps } from '../accessibility/getTitleTextAccessibilityProps';
export function TextButtonFragment() {
    const { spacings } = useTheme();
    return (React.createElement(React.Fragment, null,
        React.createElement(Text, Object.assign({ variant: 'title' }, getTitleTextAccessibilityProps(1)), "Text Button Fragment"),
        React.createElement(Box, { marginTop: spacings.s, marginBottom: spacings.xl },
            React.createElement(TextButton, { variant: 'main', marginBottom: spacings.s }, "Main"),
            React.createElement(TextButton, { variant: 'main', marginBottom: spacings.s, disabled: true }, "Main disabled"),
            React.createElement(TextButton, { variant: 'alternative', marginBottom: spacings.s }, "Alternative"),
            React.createElement(TextButton, { variant: 'alternative', marginBottom: spacings.s, disabled: true }, "Alternative disabled"),
            React.createElement(TextButton, { variant: 'danger', marginBottom: spacings.s }, "Danger"),
            React.createElement(TextButton, { variant: 'danger', marginBottom: spacings.s, disabled: true }, "Danger disabled"),
            React.createElement(TextButton, { variant: 'warning', marginBottom: spacings.s }, "Warning"),
            React.createElement(TextButton, { variant: 'warning', marginBottom: spacings.s, disabled: true }, "Warning disabled"),
            React.createElement(TextButton, { variant: 'success', marginBottom: spacings.s }, "Success"),
            React.createElement(TextButton, { variant: 'success', marginBottom: spacings.s, disabled: true }, "Success disabled"),
            React.createElement(TextButton, { variant: 'main', flexDirection: 'row', marginBottom: spacings.s, leftIcon: (color) => React.createElement(SearchIcon, { height: 20, width: 20, fill: color }) }, "Main with left icon"),
            React.createElement(TextButton, { disabled: true, variant: 'main', flexDirection: 'row', marginBottom: spacings.s, leftIcon: (color) => React.createElement(SearchIcon, { height: 20, width: 20, fill: color }) }, "Main with left icon disabled"),
            React.createElement(TextButton, { variant: 'alternative', flexDirection: 'row', marginBottom: spacings.s, rightIcon: (color) => React.createElement(SearchIcon, { height: 20, width: 20, fill: color }) }, "Alternative with right icon"),
            React.createElement(TextButton, { disabled: true, variant: 'alternative', flexDirection: 'row', marginBottom: spacings.s, rightIcon: (color) => React.createElement(SearchIcon, { height: 20, width: 20, fill: color }) }, "Alternative with right icon disabled"),
            React.createElement(TextButton, { variant: 'danger', flexDirection: 'row', marginBottom: spacings.s, leftIcon: (color) => React.createElement(SearchIcon, { height: 20, width: 20, fill: color }), rightIcon: (color) => React.createElement(SearchIcon, { height: 20, width: 20, fill: color }) }, "Danger with left and right icon"),
            React.createElement(TextButton, { disabled: true, variant: 'danger', flexDirection: 'row', marginBottom: spacings.s, leftIcon: (color) => React.createElement(SearchIcon, { height: 20, width: 20, fill: color }), rightIcon: (color) => React.createElement(SearchIcon, { height: 20, width: 20, fill: color }) }, "Danger with left and right icon disabled"))));
}
//# sourceMappingURL=TextButtonFragment.js.map