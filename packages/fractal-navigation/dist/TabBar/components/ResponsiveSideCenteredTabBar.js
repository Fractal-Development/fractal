import React from 'react';
import { useValueForLargeSizeType } from '@bma98/size-class';
import { CenteredTabBar } from './CenteredTabBar';
export function ResponsiveSideCenteredTabBar(props) {
    const tabBarPosition = useValueForLargeSizeType('width', 'left', 'bottom');
    return React.createElement(CenteredTabBar, Object.assign({}, props, { tabBarPosition: tabBarPosition }));
}
//# sourceMappingURL=ResponsiveSideCenteredTabBar.js.map