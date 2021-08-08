import React from 'react';
import { useNavigationBarInsets } from './NavigationBar/hooks/useNavigationBarInsets';
import { useTabBarInsets } from './TabBar';
import { SafeAreaLayer } from '@bma98/fractal-ui';
export function NavigationLayer(props) {
    const navigationBarInsets = useNavigationBarInsets();
    const tabBarInsets = useTabBarInsets();
    return (React.createElement(SafeAreaLayer, Object.assign({ animate: {
            marginTop: navigationBarInsets.top,
            marginRight: tabBarInsets.right,
            marginLeft: tabBarInsets.left,
            marginBottom: tabBarInsets.bottom
        }, flex: 1 }, props)));
}
//# sourceMappingURL=NavigationLayer.js.map