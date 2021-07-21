import React from 'react';
import { useTheme, Box, Text, AppleIcon, BugIcon, CheckIcon, ChevronDownIcon, CloseIcon, FacebookIcon, FileIcon, GoogleIcon, LoadIcon, SearchIcon, ThreeDotsHorizontalIcon } from '@bma98/fractal-ui';
import { getTitleTextAccessibilityProps } from './accessibility/getTitleTextAccessibilityProps';
export function IconsFragment() {
    const { spacings } = useTheme();
    return (React.createElement(React.Fragment, null,
        React.createElement(Text, Object.assign({ variant: 'title' }, getTitleTextAccessibilityProps(1)), "Icons Fragment"),
        React.createElement(Box, { marginTop: spacings.s, marginBottom: spacings.xl },
            React.createElement(AppleIcon, null),
            React.createElement(BugIcon, null),
            React.createElement(CheckIcon, null),
            React.createElement(ChevronDownIcon, null),
            React.createElement(CloseIcon, null),
            React.createElement(FacebookIcon, null),
            React.createElement(FileIcon, null),
            React.createElement(GoogleIcon, null),
            React.createElement(LoadIcon, null),
            React.createElement(SearchIcon, null),
            React.createElement(ThreeDotsHorizontalIcon, null))));
}
//# sourceMappingURL=IconsFragment.js.map