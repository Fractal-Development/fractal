import React from 'react';
import { SafeAreaLayer } from '@bma98/fractal-ui';
import { useNavigationBarInsets } from './NavigationBar/hooks/useNavigationBarInsets';
export function NavigationBarInsetsLayer(props) {
    const navigationBarInsets = useNavigationBarInsets();
    return (React.createElement(SafeAreaLayer, Object.assign({ marginTop: navigationBarInsets.top, marginRight: navigationBarInsets.right, marginLeft: navigationBarInsets.left, marginBottom: navigationBarInsets.bottom, flex: 1, position: 'relative' }, props)));
}
//# sourceMappingURL=NavigationBarInsetsLayer.js.map