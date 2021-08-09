import React from 'react';
import { useNavigationBarInsets } from './NavigationBar/hooks/useNavigationBarInsets';
import { useTabBarInsets } from './TabBar';
import { SafeAreaLayer } from '@bma98/fractal-ui';
export function NavigationLayer(props) {
    const navigationBarInsets = useNavigationBarInsets();
    const tabBarInsets = useTabBarInsets();
    return (React.createElement(SafeAreaLayer, Object.assign({ marginTop: 0, marginRight: 0, marginLeft: 0, marginBottom: 0, from: false, animate: {
            marginTop: navigationBarInsets.top,
            marginRight: tabBarInsets.right,
            marginLeft: tabBarInsets.left,
            marginBottom: tabBarInsets.bottom
        }, transition: { type: 'timing' }, flex: 1, overflow: 'hidden' }, props)));
}
//# sourceMappingURL=NavigationLayer.js.map