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
import { Text } from '../text';
import { useTheme } from '../../context/hooks/useTheme';
import { TouchableOpacity } from './TouchableOpacity';
import { getTextButtonAccessibilityProps } from './accessibility/getTextButtonAccessibilityProps';
const TextButton = forwardRef((_a, ref) => {
    var { variant, children, leftIcon, rightIcon, textProps, disabled } = _a, others = __rest(_a, ["variant", "children", "leftIcon", "rightIcon", "textProps", "disabled"]);
    const { colors } = useTheme();
    const colorName = `${variant}InteractiveColor`;
    const color = colors[colorName];
    return (React.createElement(TouchableOpacity, Object.assign({ ref: ref, opacity: disabled ? 0.5 : 1, pointerEvents: disabled ? 'none' : undefined }, others, getTextButtonAccessibilityProps(children)),
        leftIcon && leftIcon(color),
        children && (React.createElement(Text, Object.assign({ fontWeight: 500, variant: 'textButton', color: color }, textProps), children)),
        rightIcon && rightIcon(color)));
});
TextButton.displayName = 'TextButton';
export { TextButton };
//# sourceMappingURL=TextButton.js.map