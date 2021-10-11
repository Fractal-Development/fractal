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
import React, { useMemo } from 'react';
import { AutoSizeRecyclerView } from './AutoSizeRecyclerView';
import { LayoutProvider } from './RecyclerView';
export function HorizontalFlatList(_a) {
    var { rowHeight, rowWidth } = _a, others = __rest(_a, ["rowHeight", "rowWidth"]);
    const layoutProvider = useMemo(() => new LayoutProvider(() => 0, (_, dim) => {
        dim.height = rowHeight;
        dim.width = rowWidth;
    }), [rowWidth, rowHeight]);
    return React.createElement(AutoSizeRecyclerView, Object.assign({ isHorizontal: true, layoutProvider: layoutProvider }, others));
}
//# sourceMappingURL=HorizontalFlatList.js.map