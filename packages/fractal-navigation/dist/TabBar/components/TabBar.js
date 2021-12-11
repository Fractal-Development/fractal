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
import React, { useContext, useEffect } from 'react';
import { SafeAreaLayer } from '@bma98/fractal-ui';
import { useValueForLargeSizeType } from '@bma98/size-class';
import { useSetTabBarInsets } from '../hooks/useSetTabBarInsets';
import { TabBarPositionContext } from '../context/TabBarPositionProvider';
import { TabBarBackground } from './TabBarBackground';
export function TabBar(_a) {
    var { tabBarPosition, logo, children } = _a, others = __rest(_a, ["tabBarPosition", "logo", "children"]);
    const [, setTabBarPosition] = useContext(TabBarPositionContext);
    const logoForLargeSizeType = useValueForLargeSizeType('width', logo, undefined);
    const isSideBar = tabBarPosition === 'left' || tabBarPosition === 'right';
    useEffect(() => {
        setTabBarPosition(tabBarPosition);
    }, [tabBarPosition, setTabBarPosition]);
    useSetTabBarInsets();
    return (React.createElement(TabBarBackground, Object.assign({ tabBarPosition: tabBarPosition }, others),
        React.createElement(SafeAreaLayer, null),
        isSideBar && logoForLargeSizeType,
        children));
}
//# sourceMappingURL=TabBar.js.map