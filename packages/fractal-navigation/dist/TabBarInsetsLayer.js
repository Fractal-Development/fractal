import React from 'react';
import { useTabBarInsets } from './TabBar';
import { SafeAreaLayer } from '@bma98/fractal-ui';
export function TabBarInsetsLayer(props) {
    const tabBarInsets = useTabBarInsets();
    return (React.createElement(SafeAreaLayer, Object.assign({ marginTop: tabBarInsets.top, marginRight: tabBarInsets.right, marginLeft: tabBarInsets.left, marginBottom: tabBarInsets.bottom, flex: 1, position: 'relative' }, props)));
}
//# sourceMappingURL=TabBarInsetsLayer.js.map