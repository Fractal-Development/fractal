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
import React, { forwardRef, useState } from 'react';
import { useTheme } from '../../context/hooks/useTheme';
import { BaseButton } from './BaseButton';
import { useToggleButtonColors } from './hooks/useToggleButtonColors';
import { getButtonAccessibilityProps } from './accessibility/getButtonAccessibilityProps';
import { useControllableState } from '../../hooks/useControllableState';
const ToggleButton = forwardRef((_a, ref) => {
    var { active: activeProp, disabled, variant, children, onPress, onActiveChange, useGrayVariant } = _a, others = __rest(_a, ["active", "disabled", "variant", "children", "onPress", "onActiveChange", "useGrayVariant"]);
    const { colors, sizes, borderRadius } = useTheme();
    const [active, setActive] = useControllableState(activeProp, false, onActiveChange);
    const [pressed, setPressed] = useState(false);
    const [backgroundColor, foregroundColor, pressedColor] = useToggleButtonColors(variant, active, useGrayVariant);
    const handleButtonPress = () => {
        setPressed(true);
        setActive(!active);
        onPress === null || onPress === void 0 ? void 0 : onPress();
    };
    return (React.createElement(BaseButton, Object.assign({ ref: ref, height: sizes.interactiveItemHeight, width: '100%', pressedBackgroundColor: pressedColor, borderRadius: borderRadius.m, justifyContent: 'center', alignItems: 'center', onPress: handleButtonPress, initial: { backgroundColor }, opacity: disabled ? 0.5 : 1, pointerEvents: disabled ? 'none' : undefined, variants: {
            active: {
                backgroundColor
            },
            inactive: {
                backgroundColor: colors.background
            }
        }, animate: active ? 'active' : 'inactive' }, getButtonAccessibilityProps(pressed, false, 'Toggle'), others), children === null || children === void 0 ? void 0 : children(foregroundColor)));
});
ToggleButton.displayName = 'ToggleButton';
export { ToggleButton };
//# sourceMappingURL=ToggleButton.js.map