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
import React, { Children, forwardRef } from 'react';
import { Layer } from '../containers/Layer';
import { GridRow } from './GridRow';
import { getGridAccessibilityProps } from './accessibility/getGridAccessibilityProps';
const Grid = forwardRef((_a, ref) => {
    var { children } = _a, others = __rest(_a, ["children"]);
    const isRow = () => {
        let row = false;
        Children.forEach(children, (child) => {
            if (child && child.type == GridRow)
                row = true;
        });
        return row;
    };
    return (React.createElement(Layer, Object.assign({ ref: ref, flex: 1, flexDirection: isRow() ? 'column' : 'row' }, others, getGridAccessibilityProps()), children));
});
Grid.displayName = 'Grid';
export { Grid };
//# sourceMappingURL=Grid.js.map