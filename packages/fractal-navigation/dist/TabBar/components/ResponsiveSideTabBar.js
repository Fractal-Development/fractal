import React from 'react';
import { useValueForLargeSizeType } from '@bma98/size-class';
import { TabBar } from './TabBar';
export function ResponsiveSideTabBar(props) {
    const tabBarPosition = useValueForLargeSizeType('width', 'left', 'bottom');
    return React.createElement(TabBar, Object.assign({}, props, { tabBarPosition: tabBarPosition }));
}
//# sourceMappingURL=ResponsiveSideTabBar.js.map