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
import { Layer } from '../containers';
import { useTheme } from '../../context/hooks/useTheme';
import { getSeparatorAccessibilityProps } from './accessibility/getSeparatorAccessibilityProps';
const Separator = forwardRef((_a, ref) => {
    var { isAtBackgroundLevel } = _a, others = __rest(_a, ["isAtBackgroundLevel"]);
    const { colors } = useTheme();
    return (React.createElement(Layer, Object.assign({ ref: ref, height: 1, width: '100%', backgroundColor: isAtBackgroundLevel ? colors.placeholder : colors.background }, others, getSeparatorAccessibilityProps())));
});
Separator.displayName = 'Separator';
export { Separator };
//# sourceMappingURL=index.js.map