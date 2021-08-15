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
import { Layer } from '@bma98/fractal-ui';
import { TabBarContextProvider } from '@bma98/fractal-navigation';
import { ScreenContainer } from '../../ScreenContainer';
const styles = { flex: 1 };
export function TabNavigator(_a) {
    var { tabBar, children } = _a, others = __rest(_a, ["tabBar", "children"]);
    return (React.createElement(TabBarContextProvider, null,
        React.createElement(Layer, { flex: 1, overflow: 'hidden' },
            React.createElement(ScreenContainer, Object.assign({}, others, { style: styles }), children),
            tabBar)));
}
//# sourceMappingURL=TabNavigator.js.map