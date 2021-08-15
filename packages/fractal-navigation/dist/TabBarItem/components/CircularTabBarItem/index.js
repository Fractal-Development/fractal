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
import { Button } from '@bma98/fractal-ui';
import { useCallback } from 'react';
import { useTabPress } from '../../hooks/useTabPress';
export function CircularTabBarItem(_a) {
    var { children, onTabPress, tabIdentifier } = _a, others = __rest(_a, ["children", "onTabPress", "tabIdentifier"]);
    const renderChildren = useCallback(() => {
        return children('white', 28);
    }, [children]);
    const handlePress = useTabPress(tabIdentifier, onTabPress);
    return (React.createElement(Button, Object.assign({ borderRadius: 24, height: 48, width: 48 }, others, { onPress: handlePress }), renderChildren));
}
//# sourceMappingURL=index.js.map