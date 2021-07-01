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
import { Button } from './Button';
import { useTheme } from '../../context/hooks/useTheme';
import { getCircularIconButtonAccessibilityProps } from './accessibility/getCircularIconButtonAccessibilityProps';
import { useCircularButtonColors } from './hooks/useCircularIconButtonColors';
const CircularIconButton = forwardRef((_a, ref) => {
    var { variant = 'main', children, reduceColor } = _a, others = __rest(_a, ["variant", "children", "reduceColor"]);
    const { sizes } = useTheme();
    const [backgroundColor, foregroundColor, pressedBackgroundColor] = useCircularButtonColors(variant, reduceColor);
    return (React.createElement(Button, Object.assign({ ref: ref, variant: variant, backgroundColor: backgroundColor, pressedBackgroundColor: pressedBackgroundColor, height: sizes.interactiveItemHeight, width: sizes.interactiveItemHeight, borderRadius: sizes.interactiveItemHeight / 2 }, getCircularIconButtonAccessibilityProps(), others), typeof children === 'function' ? children === null || children === void 0 ? void 0 : children(foregroundColor) : children));
});
CircularIconButton.displayName = 'CircularIconButton';
export { CircularIconButton };
//# sourceMappingURL=CircularIconButton.js.map