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
import { Text } from '../../text';
import { BaseRow } from './BaseRow';
const SimpleRow = forwardRef((_a, ref) => {
    var { title } = _a, others = __rest(_a, ["title"]);
    return (React.createElement(BaseRow, Object.assign({ ref: ref }, others),
        React.createElement(Text, { variant: 'small' }, title)));
});
SimpleRow.displayName = 'SimpleRow';
export { SimpleRow };
//# sourceMappingURL=SimpleRow.js.map