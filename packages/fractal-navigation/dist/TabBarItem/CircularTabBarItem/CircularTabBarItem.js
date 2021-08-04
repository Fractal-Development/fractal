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
import { CircularIconButton, Layer } from '@bma98/fractal-ui';
import { useCallback } from 'react';
import { useTabPress } from '../hooks/useTabPress';
export function CircularTabBarItem(_a) {
    var { children } = _a, others = __rest(_a, ["children"]);
    const renderChildren = useCallback(() => {
        return children('white', 24);
    }, [children]);
    const handlePress = useTabPress(others);
    return (React.createElement(Layer, null,
        React.createElement(CircularIconButton, Object.assign({ borderRadius: 24, height: 48, width: 48 }, others, { onPress: handlePress }), renderChildren)));
}
//# sourceMappingURL=CircularTabBarItem.js.map