import React, { useState } from 'react';
import { useTheme, Box, Text, ToggleButton, LoadIcon } from '@bma98/fractal-ui';
export function ToggleButtonFragment() {
    const { colors, spacings } = useTheme();
    const [active, setActive] = useState(false);
    const [text, setText] = useState('Toggle Button');
    const toggleActive = (active) => {
        setActive(active);
        setText(active ? 'Toggle Button activated' : 'Toggle Button');
    };
    return (React.createElement(React.Fragment, null,
        React.createElement(Text, { variant: 'title' }, "ToggleButton Example"),
        React.createElement(Box, { marginTop: spacings.s, marginBottom: spacings.xl },
            React.createElement(ToggleButton, { variant: 'main', active: active, onActiveChange: toggleActive, marginBottom: spacings.s }, () => (React.createElement(Text, { variant: 'button', color: colors.text }, text))),
            React.createElement(ToggleButton, { variant: 'main', active: false, marginBottom: spacings.s, disabled: true }, () => (React.createElement(Text, { variant: 'button', color: colors.text }, 'Toggle Button disabled'))),
            React.createElement(Text, { variant: 'subtitle', alignItems: 'center', marginTop: spacings.lg }, "Toggle Button with icon"),
            React.createElement(ToggleButton, { variant: 'main', active: active, onActiveChange: toggleActive, marginBottom: spacings.s }, (color) => React.createElement(LoadIcon, { height: 24, width: 24, fill: color })),
            React.createElement(ToggleButton, { variant: 'main', active: active, onActiveChange: toggleActive, marginBottom: spacings.s, disabled: true }, (color) => React.createElement(LoadIcon, { height: 24, width: 24, fill: color })),
            React.createElement(Text, { variant: 'subtitle', alignItems: 'center', marginTop: spacings.lg }, "Toggle Button with icon and useGrayVariant"),
            React.createElement(ToggleButton, { variant: 'main', active: active, onActiveChange: toggleActive, useGrayVariant: true }, (color) => React.createElement(LoadIcon, { height: 24, width: 24, fill: color })),
            React.createElement(ToggleButton, { variant: 'main', active: active, onActiveChange: toggleActive, useGrayVariant: true, disabled: true }, (color) => React.createElement(LoadIcon, { height: 24, width: 24, fill: color })))));
}
//# sourceMappingURL=ToggleButtonFragment.js.map