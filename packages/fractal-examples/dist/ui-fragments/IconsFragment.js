import React from 'react';
import { useTheme, Box, Text, AppleIcon, BugIcon, CheckIcon, ChevronDownIcon, CloseIcon, FacebookIcon, FileIcon, GoogleIcon, LoadIcon, SearchIcon, ThreeDotsHorizontalIcon } from '@bma98/fractal-ui';
import { getTitleTextAccessibilityProps } from './accessibility/getTitleTextAccessibilityProps';
export function IconsFragment() {
    const { spacings } = useTheme();
    return (React.createElement(React.Fragment, null,
        React.createElement(Text, Object.assign({ variant: 'title' }, getTitleTextAccessibilityProps(1)), "Icons Fragment"),
        React.createElement(Box, { flexDirection: 'row', marginTop: spacings.s, marginBottom: spacings.xl },
            React.createElement(AppleIcon, { height: 24, width: 24 }),
            React.createElement(BugIcon, { height: 24, width: 24 }),
            React.createElement(CheckIcon, { height: 24, width: 24 }),
            React.createElement(ChevronDownIcon, { height: 24, width: 24 }),
            React.createElement(CloseIcon, { height: 24, width: 24 }),
            React.createElement(FacebookIcon, { height: 24, width: 24 }),
            React.createElement(FileIcon, { height: 24, width: 24 }),
            React.createElement(GoogleIcon, { height: 24, width: 24 }),
            React.createElement(LoadIcon, { height: 24, width: 24 }),
            React.createElement(SearchIcon, { height: 24, width: 24 }),
            React.createElement(ThreeDotsHorizontalIcon, { height: 24, width: 24 }))));
}
//# sourceMappingURL=IconsFragment.js.map