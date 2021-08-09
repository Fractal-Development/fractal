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
import React, { useCallback } from 'react';
import { Route } from '../../router';
import { useScreenActivityState } from './hooks/useScreenActivityState';
import { useIsInitialRenderDone } from '../../hooks';
import { useNavigationRouteStyles } from './hooks/useNavigationRouteStyles';
import { StackPresentationTypeProvider } from '../StackNavigation/context/StackPresentationTypeProvider';
import { Screen } from '../../components/Screen';
export function NavigationRouteContent(_a) {
    var { path = '/', style, children, isTabScreen, stackPresentation = 'push', isRootRoute = false } = _a, others = __rest(_a, ["path", "style", "children", "isTabScreen", "stackPresentation", "isRootRoute"]);
    const renderChildren = useCallback(() => children, [children]);
    const activityState = useScreenActivityState(path, isTabScreen !== null && isTabScreen !== void 0 ? isTabScreen : false);
    const [initialRenderDone] = useIsInitialRenderDone(activityState);
    const contentStyle = useNavigationRouteStyles(style);
    return (React.createElement(Screen, Object.assign({}, others, { activityState: activityState, active: activityState, stackPresentation: stackPresentation, style: contentStyle }),
        React.createElement(StackPresentationTypeProvider, { stackPresentation: stackPresentation },
            React.createElement(Route, { path: path }, initialRenderDone ? renderChildren : null))));
}
//# sourceMappingURL=NavigationRouteContent.js.map