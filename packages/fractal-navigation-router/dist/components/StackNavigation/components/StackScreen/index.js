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
import { NavigationRoute } from '../../../NavigationRoute';
import { NavigationBar } from '@bma98/fractal-navigation';
import { useIsRootNavigationBar } from './hooks/useIsRootNavigationBar';
import { useGoBackAnimated } from '../../hooks/useGoBackAnimated';
import { StackScreenWebContainer } from '../StackScreenWebContainer';
function StackScreenWebContent({ path = '/', navBarConfig, children }) {
    const isRootNavigationBar = useIsRootNavigationBar(path);
    const goBack = useGoBackAnimated();
    return (React.createElement(React.Fragment, null,
        React.createElement(NavigationBar, Object.assign({ showBackButton: !isRootNavigationBar }, navBarConfig === null || navBarConfig === void 0 ? void 0 : navBarConfig.props, { goBack: goBack })),
        children));
}
export function StackScreen(_a) {
    var { navBarConfig, children } = _a, others = __rest(_a, ["navBarConfig", "children"]);
    return (React.createElement(NavigationRoute, Object.assign({ top: 0, left: 0, right: 0, bottom: 0, position: 'absolute' }, others),
        React.createElement(StackScreenWebContainer, Object.assign({}, others),
            React.createElement(StackScreenWebContent, Object.assign({}, others, { navBarConfig: navBarConfig }), children))));
}
//# sourceMappingURL=index.js.map