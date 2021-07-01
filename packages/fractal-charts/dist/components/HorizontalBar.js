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
import { Layer, HorizontalLayer, useTheme } from '@bma98/fractal-ui';
export function HorizontalBar(_a) {
    var { percentage, colors, barHeight = 54, barBorderRadius } = _a, layerProps = __rest(_a, ["percentage", "colors", "barHeight", "barBorderRadius"]);
    const { borderRadius } = useTheme();
    useEffect(() => {
        if (percentage > 1 || percentage < 0) {
            throw new Error('Invalid range (percentage should be between 0 and 1');
        }
    }, [percentage]);
    return (React.createElement(Layer, Object.assign({}, layerProps),
        React.createElement(HorizontalLayer, { backgroundColor: colors.background, height: barHeight, flexShrink: 1, overflow: 'hidden', borderRadius: barBorderRadius !== null && barBorderRadius !== void 0 ? barBorderRadius : borderRadius.m },
            React.createElement(HorizontalLayer, { flex: percentage, backgroundColor: colors.bar, borderRadius: barBorderRadius !== null && barBorderRadius !== void 0 ? barBorderRadius : borderRadius.m }))));
}
//# sourceMappingURL=HorizontalBar.js.map