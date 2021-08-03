import React from 'react';
import { Layer, useTheme } from '@bma98/fractal-ui';
import { useTabBarPositionValues, useTabBarSafeAreaPadding } from './hooks';
import { tabBarCSSPosition } from './tabBarCSSPosition';
export function TabBarBackground(props) {
    const { tabBarPosition } = props;
    const positionValues = useTabBarPositionValues(tabBarPosition);
    const tabBarSafeAreaPadding = useTabBarSafeAreaPadding(tabBarPosition);
    const justifyContent = tabBarPosition === 'bottom' ? 'center' : 'flex-start';
    const { tabBar } = useTheme();
    return (React.createElement(Layer, Object.assign({ backgroundColor: tabBar.backgroundColor, boxShadow: tabBar.shadow, justifyContent: justifyContent, position: tabBarCSSPosition, zIndex: 3000 }, positionValues, tabBarSafeAreaPadding, props)));
}
//# sourceMappingURL=TabBarBackground.js.map