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
import React, { forwardRef } from 'react';
import AutoSizer from 'react-virtualized-auto-sizer';
import { RecyclerView } from '../RecyclerView';
const AutoSizeRecyclerView = forwardRef((_a, ref) => {
    var { style } = _a, others = __rest(_a, ["style"]);
    return (React.createElement(AutoSizer, null, ({ height, width }) => React.createElement(RecyclerView, Object.assign({ ref: ref, canChangeSize: true, style: Object.assign({ height, width }, style) }, others))));
});
AutoSizeRecyclerView.displayName = 'AutoSizeRecyclerView';
export { AutoSizeRecyclerView };
//# sourceMappingURL=index.js.map