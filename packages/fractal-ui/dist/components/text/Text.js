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
import { useTheme } from '../../context/hooks/useTheme';
import { BaseText } from './BaseText';
const Text = forwardRef((_a, ref) => {
    var { variant = 'normal' } = _a, others = __rest(_a, ["variant"]);
    const { textVariants, colors } = useTheme();
    const { fontSize, fontWeight, color, fontFamily } = textVariants[variant];
    const finalColor = colors[color];
    return (React.createElement(BaseText, Object.assign({ ref: ref, selectable: false, fontFamily: fontFamily, fontSize: fontSize, fontWeight: fontWeight, color: finalColor }, others)));
});
Text.displayName = 'Text';
export { Text };
//# sourceMappingURL=Text.js.map