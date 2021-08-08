var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from 'react';
import { Layer, useTheme } from '@bma98/fractal-ui';
import { useTabBarPositionLayoutProps, useTabBarSafeAreaPadding } from './hooks';
import { tabBarCSSPosition } from './tabBarCSSPosition';
export function TabBarBackground(props) {
    const { tabBarPosition } = props;
    const { tabBar } = useTheme();
    const _a = useTabBarPositionLayoutProps(tabBarPosition), { translateY, translateX } = _a, layoutProps = __rest(_a, ["translateY", "translateX"]);
    const tabBarSafeAreaPadding = useTabBarSafeAreaPadding(tabBarPosition);
    const justifyContent = tabBarPosition === 'bottom' ? 'center' : 'flex-start';
    return (React.createElement(Layer, Object.assign({ animate: { translateY, translateX }, backgroundColor: tabBar.backgroundColor, boxShadow: tabBar.shadow, justifyContent: justifyContent, position: tabBarCSSPosition, zIndex: 3000 }, layoutProps, tabBarSafeAreaPadding, props)));
}
//# sourceMappingURL=TabBarBackground.js.map