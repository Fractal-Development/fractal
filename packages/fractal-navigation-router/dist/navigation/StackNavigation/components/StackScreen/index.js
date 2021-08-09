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
import { useHistory } from '../../../../router';
import { NavigationRoute } from '../../../NavigationRoute';
import { NavigationBar } from '@bma98/fractal-navigation';
import { useShowNavigationBarBackButton } from './hooks/useShowNavigationBarBackButton';
export function StackScreen(_a) {
    var { navBarConfig, children, path } = _a, others = __rest(_a, ["navBarConfig", "children", "path"]);
    const { goBack } = useHistory();
    const showNavigationBarButton = useShowNavigationBarBackButton(path);
    return (React.createElement(NavigationRoute, Object.assign({}, others, { path: path, onDismissed: goBack }),
        React.createElement(NavigationBar, Object.assign({ showBackButton: showNavigationBarButton }, navBarConfig, { goBack: goBack })),
        children));
}
//# sourceMappingURL=index.js.map