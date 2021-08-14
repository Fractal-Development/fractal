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
import { useSizeValue } from '@bma98/size-class';
import { LayoutProvider } from './RecyclerView';
import { AutoSizeRecyclerView } from './AutoSizeRecyclerView';
export function VerticalFlatList(_a) {
    var { rowHeight } = _a, others = __rest(_a, ["rowHeight"]);
    const width = useSizeValue('width');
    const layoutProvider = useMemo(() => {
        return new LayoutProvider(() => {
            return 0;
        }, (_, dim) => {
            dim.height = rowHeight;
            dim.width = width;
            return;
        });
    }, [width, rowHeight]);
    return React.createElement(AutoSizeRecyclerView, Object.assign({ layoutProvider: layoutProvider }, others));
}
//# sourceMappingURL=VerticalFlatList.js.map