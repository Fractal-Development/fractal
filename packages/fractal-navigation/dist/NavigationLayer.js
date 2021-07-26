import React from 'react';
import { useNavigationBarInsets } from './NavigationBar/hooks/useNavigationBarInsets';
import { useTabBarInsets } from './TabBar/hooks/useTabBarInsets';
import { SafeAreaLayer } from '@bma98/fractal-ui';
export function NavigationLayer(props) {
    const navigationBarInsets = useNavigationBarInsets();
    const tabBarInsets = useTabBarInsets();
    return (React.createElement(SafeAreaLayer, Object.assign({}, props, { paddingTop: navigationBarInsets.top, paddingRight: tabBarInsets.right, paddingLeft: tabBarInsets.left, paddingBottom: tabBarInsets.bottom })));
}
//# sourceMappingURL=NavigationLayer.js.map