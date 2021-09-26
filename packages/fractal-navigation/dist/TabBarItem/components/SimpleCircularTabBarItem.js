import React from 'react';
import { useTheme } from '@bma98/fractal-ui';
import { CircularTabBarItem } from './CircularTabBarItem';
export function SimpleCircularTabBarItem(props) {
    const { spacings } = useTheme();
    return React.createElement(CircularTabBarItem, Object.assign({ width: 56, height: 56, borderRadius: 28, marginBottom: spacings.m, alignSelf: 'center' }, props));
}
//# sourceMappingURL=SimpleCircularTabBarItem.js.map