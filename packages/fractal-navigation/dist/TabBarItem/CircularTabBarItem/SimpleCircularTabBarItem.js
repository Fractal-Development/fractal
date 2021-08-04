import React from 'react';
import { useTheme } from '@bma98/fractal-ui';
import { useTabBarPosition } from '../../TabBar/hooks/useTabBarPosition';
import { CircularTabBarItem } from './CircularTabBarItem';
export function SimpleCircularTabBarItem(props) {
    const tabBarPosition = useTabBarPosition();
    const { spacings } = useTheme();
    const marginBottom = tabBarPosition !== 'bottom' ? spacings.m : undefined;
    return React.createElement(CircularTabBarItem, Object.assign({ marginBottom: marginBottom, alignSelf: 'center' }, props));
}
//# sourceMappingURL=SimpleCircularTabBarItem.js.map