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
import React, { SimpleTabBarItem } from '@bma98/fractal-navigation';
import { useIsRouteActive } from '../../../../../hooks/useIsRouteActive';
import { useGoToTab } from '../hooks/useGoToTab';
export function SimpleTabBarItemLink(_a) {
    var { path } = _a, others = __rest(_a, ["path"]);
    const isRouteActive = useIsRouteActive(path, false);
    const goToTab = useGoToTab(path, isRouteActive);
    return React.createElement(SimpleTabBarItem, Object.assign({}, others, { tabIdentifier: path, onTabPress: goToTab, active: isRouteActive }));
}
//# sourceMappingURL=SimpleTabBarItemLink.js.map