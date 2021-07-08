import React from 'react';
import { useTheme, Box, LoadingBackground, Text } from '@bma98/fractal-ui';
import { getTitleTextAccessibilityProps } from './accessibility/getTitleTextAccessibilityProps';
export function LoadingBackgroundFragment() {
    const { spacings } = useTheme();
    return (React.createElement(React.Fragment, null,
        React.createElement(Text, Object.assign({ variant: 'title' }, getTitleTextAccessibilityProps(1)), "Loading Background"),
        React.createElement(Box, { alignItems: 'center', marginTop: spacings.s, marginBottom: spacings.xl },
            React.createElement(LoadingBackground, { width: '40%', height: '40%' }))));
}
//# sourceMappingURL=LoadingBackgroundFragment.js.map