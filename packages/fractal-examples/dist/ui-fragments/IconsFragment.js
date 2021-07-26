import React from 'react';
import { useTheme, Box, Layer, Text, AppleIcon, BugIcon, CheckIcon, ChevronDownIcon, CloseIcon, FacebookIcon, FileIcon, GoogleIcon, LoadIcon, SearchIcon, ThreeDotsHorizontalIcon } from '@bma98/fractal-ui';
import { getTitleTextAccessibilityProps } from './accessibility/getTitleTextAccessibilityProps';
export function IconsFragment() {
    const { colors, spacings } = useTheme();
    return (React.createElement(React.Fragment, null,
        React.createElement(Text, Object.assign({ variant: 'title' }, getTitleTextAccessibilityProps(1)), "Icons Fragment"),
        React.createElement(Box, { flexDirection: 'row', flexWrap: 'wrap', marginTop: spacings.s, marginBottom: spacings.xl },
            React.createElement(Layer, { marginRight: spacings.xs, marginBottom: spacings.xs },
                React.createElement(AppleIcon, { height: 24, width: 24, fill: colors.black })),
            React.createElement(Layer, { marginRight: spacings.xs, marginBottom: spacings.xs },
                React.createElement(BugIcon, { height: 24, width: 24, fill: colors.black })),
            React.createElement(Layer, { marginRight: spacings.xs, marginBottom: spacings.xs },
                React.createElement(CheckIcon, { height: 24, width: 24, fill: colors.black })),
            React.createElement(Layer, { marginRight: spacings.xs, marginBottom: spacings.xs },
                React.createElement(ChevronDownIcon, { height: 24, width: 24, fill: colors.black })),
            React.createElement(Layer, { marginRight: spacings.xs, marginBottom: spacings.xs },
                React.createElement(CloseIcon, { height: 24, width: 24, fill: colors.black })),
            React.createElement(Layer, { marginRight: spacings.xs, marginBottom: spacings.xs },
                React.createElement(FacebookIcon, { height: 24, width: 24, fill: colors.black })),
            React.createElement(Layer, { marginRight: spacings.xs, marginBottom: spacings.xs },
                React.createElement(FileIcon, { height: 24, width: 24, fill: colors.black })),
            React.createElement(Layer, { marginRight: spacings.xs, marginBottom: spacings.xs },
                React.createElement(GoogleIcon, { height: 24, width: 24, fill: colors.black })),
            React.createElement(Layer, { marginRight: spacings.xs, marginBottom: spacings.xs },
                React.createElement(LoadIcon, { height: 24, width: 24, fill: colors.black })),
            React.createElement(Layer, { marginRight: spacings.xs, marginBottom: spacings.xs },
                React.createElement(SearchIcon, { height: 24, width: 24, fill: colors.black })),
            React.createElement(Layer, { marginRight: spacings.xs, marginBottom: spacings.xs },
                React.createElement(ThreeDotsHorizontalIcon, { height: 24, width: 24, fill: colors.black })))));
}
//# sourceMappingURL=IconsFragment.js.map