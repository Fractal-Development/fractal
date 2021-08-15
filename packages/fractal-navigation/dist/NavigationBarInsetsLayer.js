import React from 'react';
import { useNavigationBarInsets } from './NavigationBar/hooks/useNavigationBarInsets';
import { SafeAreaLayer } from '@bma98/fractal-ui';
export function NavigationBarInsetsLayer(props) {
    const navigationBarInsets = useNavigationBarInsets();
    return (React.createElement(SafeAreaLayer, Object.assign({ marginTop: navigationBarInsets.top, marginRight: navigationBarInsets.right, marginLeft: navigationBarInsets.left, marginBottom: navigationBarInsets.bottom, 
        // from={false}
        // animate={{
        //     marginTop: navigationBarInsets.top,
        //     marginRight: navigationBarInsets.right,
        //     marginLeft: navigationBarInsets.left,
        //     marginBottom: navigationBarInsets.bottom
        // }}
        // transition={{ type: 'timing' }}
        flex: 1, position: 'relative', overflow: 'hidden' }, props)));
}
//# sourceMappingURL=NavigationBarInsetsLayer.js.map