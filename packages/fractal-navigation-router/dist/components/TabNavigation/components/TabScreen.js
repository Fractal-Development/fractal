import React from 'react';
import { NavigationRoute } from '../../NavigationRoute';
export function TabScreen(props) {
    return React.createElement(NavigationRoute, Object.assign({ top: 0, left: 0, right: 0, bottom: 0, position: "absolute" }, props, { isTabScreen: true }));
}
//# sourceMappingURL=TabScreen.js.map