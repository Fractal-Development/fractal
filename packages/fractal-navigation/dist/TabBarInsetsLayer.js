import React from 'react';
import { useTabBarInsets } from './TabBar';
import { SafeAreaLayer } from '@bma98/fractal-ui';
export function TabBarInsetsLayer(props) {
    const tabBarInsets = useTabBarInsets();
    return (React.createElement(SafeAreaLayer, Object.assign({ marginTop: tabBarInsets.top, marginRight: tabBarInsets.right, marginLeft: tabBarInsets.left, marginBottom: tabBarInsets.bottom, 
        // from={false}
        // animate={{
        //     marginTop: tabBarInsets.top,
        //     marginRight: tabBarInsets.right,
        //     marginLeft: tabBarInsets.left,
        //     marginBottom: tabBarInsets.bottom
        // }}
        // transition={{ type: 'timing' }}
        flex: 1, position: 'relative', overflow: 'hidden' }, props)));
}
//# sourceMappingURL=TabBarInsetsLayer.js.map