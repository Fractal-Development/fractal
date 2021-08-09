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
import React, { useEffect } from 'react';
import { StackScreenWebModalContainer } from '../StackNavigation/components/StackScreenWebContainers/StackScreenWebModalContainer';
import { StackScreenWebContainer } from '../StackNavigation/components/StackScreenWebContainers/StackScreenWebContainer';
import { NavigationRouteContent } from './NavigationRouteContent';
import { useScreenActivityState } from './hooks/useScreenActivityState';
export function NavigationRoute(_a) {
    var { onDismissed } = _a, others = __rest(_a, ["onDismissed"]);
    const { isTabScreen, path = '/', stackPresentation = 'push', isRootRoute = false } = others;
    const activityState = useScreenActivityState(path, isTabScreen !== null && isTabScreen !== void 0 ? isTabScreen : false);
    useEffect(() => {
        return () => {
            onDismissed === null || onDismissed === void 0 ? void 0 : onDismissed();
        };
    }, []);
    if (stackPresentation === 'push' && !isTabScreen && !isRootRoute) {
        return (React.createElement(StackScreenWebContainer, null,
            React.createElement(NavigationRouteContent, Object.assign({}, others))));
    }
    else if (stackPresentation === 'modal') {
        return activityState > 0 ? (React.createElement(StackScreenWebModalContainer, null,
            React.createElement(NavigationRouteContent, Object.assign({}, others)))) : null;
    }
    else {
        return React.createElement(NavigationRouteContent, Object.assign({}, others));
    }
}
//# sourceMappingURL=index.js.map