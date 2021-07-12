import React from 'react';
import { useTheme, ActivityIndicator, Box, Text } from '@bma98/fractal-ui';
import { getTitleTextAccessibilityProps } from '../accessibility/getTitleTextAccessibilityProps';
export function ActivityIndicatorFragment() {
    const { colors, spacings } = useTheme();
    const width = 25;
    const height = 25;
    return (React.createElement(React.Fragment, null,
        React.createElement(Text, Object.assign({ variant: 'title' }, getTitleTextAccessibilityProps(1)), "Activity Indicator Fragment"),
        React.createElement(Box, { alignContent: 'center', flexDirection: 'row', marginTop: spacings.s, marginBottom: spacings.xl },
            React.createElement(ActivityIndicator, { width: width, height: height, color: colors.mainInteractiveColor, marginRight: spacings.m }),
            React.createElement(ActivityIndicator, { width: width, height: height, color: colors.alternativeInteractiveColor, marginRight: spacings.m }),
            React.createElement(ActivityIndicator, { width: width, height: height, color: colors.successInteractiveColor, marginRight: spacings.m }),
            React.createElement(ActivityIndicator, { width: width, height: height, color: colors.warningInteractiveColor, marginRight: spacings.m }),
            React.createElement(ActivityIndicator, { width: width, height: height, color: colors.dangerInteractiveColor, marginRight: spacings.m }))));
}
//# sourceMappingURL=ActivityIndicatorFragment.js.map