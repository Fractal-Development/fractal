import React, { useState } from 'react';
import { useTheme, Box, RoundedToggleButton, Text, AppleIcon, BugIcon, CheckIcon, ChevronDownIcon, FacebookIcon, GoogleIcon } from '@bma98/fractal-ui';
export function RoundedToggleButtonFragment() {
    const { spacings } = useTheme();
    const [active, setActive] = useState(false);
    const toggleActive = (active) => setActive(active);
    return (React.createElement(React.Fragment, null,
        React.createElement(Text, { variant: 'title' }, "RoundedToggleButton Example"),
        React.createElement(Box, { marginTop: spacings.s, marginBottom: spacings.xl },
            React.createElement(RoundedToggleButton, { variant: 'main', active: active, onActiveChange: toggleActive, marginBottom: spacings.s }, (color) => React.createElement(FacebookIcon, { height: 24, width: 24, fill: color })),
            React.createElement(RoundedToggleButton, { variant: 'main', active: active, onActiveChange: toggleActive, marginBottom: spacings.s, disabled: true }, (color) => React.createElement(FacebookIcon, { height: 24, width: 24, fill: color })),
            React.createElement(RoundedToggleButton, { variant: 'main', active: active, onActiveChange: toggleActive, marginBottom: spacings.s, useGrayVariant: true }, (color) => React.createElement(FacebookIcon, { height: 24, width: 24, fill: color })),
            React.createElement(RoundedToggleButton, { variant: 'main', active: active, onActiveChange: toggleActive, marginBottom: spacings.s, useGrayVariant: true, disabled: true }, (color) => React.createElement(FacebookIcon, { height: 24, width: 24, fill: color })),
            React.createElement(RoundedToggleButton, { variant: 'alternative', active: active, onActiveChange: toggleActive, marginBottom: spacings.s }, (color) => React.createElement(AppleIcon, { height: 24, width: 24, fill: color })),
            React.createElement(RoundedToggleButton, { variant: 'alternative', active: active, onActiveChange: toggleActive, marginBottom: spacings.s, disabled: true }, (color) => React.createElement(AppleIcon, { height: 24, width: 24, fill: color })),
            React.createElement(RoundedToggleButton, { variant: 'alternative', active: active, onActiveChange: toggleActive, marginBottom: spacings.s, useGrayVariant: true }, (color) => React.createElement(AppleIcon, { height: 24, width: 24, fill: color })),
            React.createElement(RoundedToggleButton, { variant: 'alternative', active: active, onActiveChange: toggleActive, marginBottom: spacings.s, useGrayVariant: true, disabled: true }, (color) => React.createElement(AppleIcon, { height: 24, width: 24, fill: color })),
            React.createElement(RoundedToggleButton, { variant: 'danger', active: active, onActiveChange: toggleActive, marginBottom: spacings.s }, (color) => React.createElement(BugIcon, { height: 24, width: 24, fill: color })),
            React.createElement(RoundedToggleButton, { variant: 'danger', active: active, onActiveChange: toggleActive, marginBottom: spacings.s, disabled: true }, (color) => React.createElement(BugIcon, { height: 24, width: 24, fill: color })),
            React.createElement(RoundedToggleButton, { variant: 'danger', active: active, onActiveChange: toggleActive, marginBottom: spacings.s, useGrayVariant: true }, (color) => React.createElement(BugIcon, { height: 24, width: 24, fill: color })),
            React.createElement(RoundedToggleButton, { variant: 'danger', active: active, onActiveChange: toggleActive, marginBottom: spacings.s, useGrayVariant: true, disabled: true }, (color) => React.createElement(BugIcon, { height: 24, width: 24, fill: color })),
            React.createElement(RoundedToggleButton, { variant: 'warning', active: active, onActiveChange: toggleActive, marginBottom: spacings.s }, (color) => React.createElement(CheckIcon, { height: 24, width: 24, fill: color })),
            React.createElement(RoundedToggleButton, { variant: 'warning', active: active, onActiveChange: toggleActive, marginBottom: spacings.s, disabled: true }, (color) => React.createElement(CheckIcon, { height: 24, width: 24, fill: color })),
            React.createElement(RoundedToggleButton, { variant: 'warning', active: active, onActiveChange: toggleActive, marginBottom: spacings.s, useGrayVariant: true }, (color) => React.createElement(CheckIcon, { height: 24, width: 24, fill: color })),
            React.createElement(RoundedToggleButton, { variant: 'warning', active: active, onActiveChange: toggleActive, marginBottom: spacings.s, useGrayVariant: true, disabled: true }, (color) => React.createElement(CheckIcon, { height: 24, width: 24, fill: color })),
            React.createElement(RoundedToggleButton, { variant: 'success', active: active, onActiveChange: toggleActive, marginBottom: spacings.s }, (color) => React.createElement(ChevronDownIcon, { height: 24, width: 24, fill: color })),
            React.createElement(RoundedToggleButton, { variant: 'success', active: active, onActiveChange: toggleActive, marginBottom: spacings.s, disabled: true }, (color) => React.createElement(ChevronDownIcon, { height: 24, width: 24, fill: color })),
            React.createElement(RoundedToggleButton, { variant: 'success', active: active, onActiveChange: toggleActive, marginBottom: spacings.s, useGrayVariant: true }, (color) => React.createElement(ChevronDownIcon, { height: 24, width: 24, fill: color })),
            React.createElement(RoundedToggleButton, { variant: 'success', active: active, onActiveChange: toggleActive, marginBottom: spacings.s, useGrayVariant: true, disabled: true }, (color) => React.createElement(ChevronDownIcon, { height: 24, width: 24, fill: color })),
            React.createElement(RoundedToggleButton, { variant: 'content', active: active, onActiveChange: toggleActive, marginBottom: spacings.s }, (color) => React.createElement(GoogleIcon, { height: 24, width: 24, fill: color })),
            React.createElement(RoundedToggleButton, { variant: 'content', active: active, onActiveChange: toggleActive, marginBottom: spacings.s, disabled: true }, (color) => React.createElement(GoogleIcon, { height: 24, width: 24, fill: color })),
            React.createElement(RoundedToggleButton, { variant: 'content', active: active, onActiveChange: toggleActive, useGrayVariant: true }, (color) => React.createElement(GoogleIcon, { height: 24, width: 24, fill: color })),
            React.createElement(RoundedToggleButton, { variant: 'content', active: active, onActiveChange: toggleActive, useGrayVariant: true, disabled: true }, (color) => React.createElement(GoogleIcon, { height: 24, width: 24, fill: color })))));
}
//# sourceMappingURL=RoundedToggleButtonFragment.js.map