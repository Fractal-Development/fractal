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
import { HorizontalLayer } from '../../containers/HorizontalLayer';
import { BaseRow } from './BaseRow';
import { useTheme } from '../../../context';
import { Check } from '../../CheckBox/Check';
const CheckMarkRow = forwardRef((_a, ref) => {
    var { title, isSelected } = _a, others = __rest(_a, ["title", "isSelected"]);
    const { spacings } = useTheme();
    return (React.createElement(BaseRow, Object.assign({ ref: ref }, others),
        React.createElement(HorizontalLayer, { alignItems: 'center', flex: 1, marginRight: spacings.s },
            React.createElement(Check, { value: isSelected, label: title }))));
});
CheckMarkRow.displayName = 'CheckMarkRow';
export { CheckMarkRow };
//# sourceMappingURL=CheckMarkRow.js.map