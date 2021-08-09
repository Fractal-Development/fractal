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
import React, { Children, useEffect, useMemo, useRef } from 'react';
import { useLocation } from '../../../../router';
import { ScreenStack } from '../ScreenStack';
import { filterMatchingChildren } from './util/filterMatchingChildren';
import { useIsRouteActive } from '../../../../hooks/useIsRouteActive';
import { useTabBarInsets } from '@bma98/fractal-navigation';
import { getMarginInsets } from './util/getMarginInsets';
import { StackNavigatorRootPathProvider } from '../../context/StackNavigatorRootPathProvider';
export function StackNavigator(_a) {
    var { path = '', children, style } = _a, others = __rest(_a, ["path", "children", "style"]);
    const { pathname } = useLocation();
    const isRouteActive = useIsRouteActive(path, false);
    const prevChildrenRef = useRef([]);
    const tabBarInsets = useTabBarInsets();
    const marginInsets = getMarginInsets(tabBarInsets, false, true);
    let childrenToRender = Children.toArray(children);
    childrenToRender = filterMatchingChildren(childrenToRender, pathname);
    const finalStyle = useMemo(() => {
        return [
            style,
            Object.assign({ flex: 1 }, marginInsets)
        ];
    }, [style, marginInsets]);
    useEffect(() => {
        if (isRouteActive) {
            prevChildrenRef.current = childrenToRender;
        }
    }, [childrenToRender, isRouteActive]);
    return (React.createElement(StackNavigatorRootPathProvider, { initialValue: path },
        React.createElement(ScreenStack, Object.assign({ style: finalStyle }, others), isRouteActive ? childrenToRender : prevChildrenRef.current)));
}
//# sourceMappingURL=index.js.map