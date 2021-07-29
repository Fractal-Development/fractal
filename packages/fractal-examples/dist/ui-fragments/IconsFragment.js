import React from 'react';
import { useTheme, Box, Text, AppleIcon, BugIcon, CheckIcon, ChevronDownIcon, CloseIcon, FacebookIcon, FileIcon, GoogleIcon, LoadIcon, SearchIcon, ThreeDotsHorizontalIcon } from '@bma98/fractal-ui';
import { getTitleTextAccessibilityProps } from './accessibility/getTitleTextAccessibilityProps';
export function IconsFragment() {
    const { colors, spacings } = useTheme();
    return (React.createElement(React.Fragment, null,
        React.createElement(Text, Object.assign({ variant: 'title' }, getTitleTextAccessibilityProps(1)), "Icons Fragment"),
        React.createElement(Box, { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around', marginTop: spacings.s, marginBottom: spacings.xl },
            React.createElement(AppleIcon, { height: 24, width: 24, fill: colors.black }),
            React.createElement(BugIcon, { height: 24, width: 24, fill: colors.black }),
            React.createElement(CheckIcon, { height: 24, width: 24, fill: colors.black }),
            React.createElement(ChevronDownIcon, { height: 24, width: 24, fill: colors.black }),
            React.createElement(CloseIcon, { height: 24, width: 24, fill: colors.black }),
            React.createElement(FacebookIcon, { height: 24, width: 24, fill: colors.black }),
            React.createElement(FileIcon, { height: 24, width: 24, fill: colors.black }),
            React.createElement(GoogleIcon, { height: 24, width: 24, fill: colors.black }),
            React.createElement(LoadIcon, { height: 24, width: 24, fill: colors.black }),
            React.createElement(SearchIcon, { height: 24, width: 24, fill: colors.black }),
            React.createElement(ThreeDotsHorizontalIcon, { height: 24, width: 24, fill: colors.black }))));
}
//# sourceMappingURL=IconsFragment.js.map