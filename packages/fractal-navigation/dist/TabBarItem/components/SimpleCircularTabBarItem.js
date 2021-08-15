import React from 'react';
import { useTheme } from '@bma98/fractal-ui';
import { useTabBarPosition } from '../../TabBar/hooks/useTabBarPosition';
import { CircularTabBarItem } from './CircularTabBarItem';
export function SimpleCircularTabBarItem(props) {
    const tabBarPosition = useTabBarPosition();
    const { spacings } = useTheme();
    const marginLeft = tabBarPosition !== 'bottom' ? spacings.m : undefined;
    return (React.createElement(CircularTabBarItem, Object.assign({ width: 56, height: 56, borderRadius: 28, marginBottom: spacings.m, marginLeft: marginLeft, alignSelf: 'center' }, props)));
}
//# sourceMappingURL=SimpleCircularTabBarItem.js.map