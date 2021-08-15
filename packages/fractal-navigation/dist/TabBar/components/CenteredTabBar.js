import React from 'react';
import { TabBar } from './TabBar';
export function CenteredTabBar(props) {
    const { tabBarPosition } = props;
    const justifyContent = tabBarPosition === 'left' || tabBarPosition === 'right' ? 'center' : undefined;
    return React.createElement(TabBar, Object.assign({ justifyContent: justifyContent }, props));
}
//# sourceMappingURL=CenteredTabBar.js.map