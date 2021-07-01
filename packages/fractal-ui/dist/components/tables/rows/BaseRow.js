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
import React, { forwardRef, memo } from 'react';
import { Separator } from '../../Separator';
import { useTheme } from '../../../context';
import { Layer } from '../../containers';
const BaseRow = forwardRef((_a, ref) => {
    var { addSeparator = false, children } = _a, others = __rest(_a, ["addSeparator", "children"]);
    const { spacings } = useTheme();
    return (React.createElement(Layer, Object.assign({ paddingTop: spacings.s, ref: ref }, others),
        children,
        addSeparator ? React.createElement(Separator, { marginTop: spacings.s }) : null));
});
BaseRow.displayName = 'BaseRow';
const MemoizedBaseRow = memo(BaseRow);
MemoizedBaseRow.displayName = 'MemoizedBaseRow';
export { BaseRow, MemoizedBaseRow };
//# sourceMappingURL=BaseRow.js.map