import React from 'react';
import { Layer, useTheme } from '@bma98/fractal-ui';
import { useTabBarPositionValues, useTabBarSafeAreaPadding } from './hooks';
import { cssPosition } from './cssPosition';
export function TabBarBackground(props) {
    const { tabBarPosition } = props;
    const positionValues = useTabBarPositionValues(tabBarPosition);
    const tabBarSafeAreaPadding = useTabBarSafeAreaPadding(tabBarPosition);
    const { colors, shadows } = useTheme();
    return (React.createElement(Layer, Object.assign({ backgroundColor: colors.foreground, boxShadow: shadows.mainShadow, justifyContent: 'center', position: cssPosition, zIndex: 3000 }, props, positionValues, tabBarSafeAreaPadding)));
}
//# sourceMappingURL=TabBarBackground.js.map