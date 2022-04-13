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
import React, { forwardRef, useCallback, useMemo, useState } from 'react';
import { Pressable } from '../Pressable';
const BaseButton = forwardRef((_a, ref) => {
    var { whileTap, pressedBackgroundColor, onPressIn, onPressOut, backgroundColor } = _a, others = __rest(_a, ["whileTap", "pressedBackgroundColor", "onPressIn", "onPressOut", "backgroundColor"]);
    const [currentVariant, setCurrentVariant] = useState('default');
    const variants = useMemo(() => ({
        tapped: Object.assign({ scale: 0.9, backgroundColor: pressedBackgroundColor }, whileTap),
        default: {
            scale: 1.0,
            backgroundColor
        }
    }), [pressedBackgroundColor, backgroundColor, whileTap]);
    const togglePress = useCallback(() => {
        setCurrentVariant((variant) => (variant === 'tapped' ? 'default' : 'tapped'));
    }, []);
    const handlePressIn = useCallback(() => {
        togglePress();
        onPressIn === null || onPressIn === void 0 ? void 0 : onPressIn();
    }, [togglePress, onPressIn]);
    const handlePressOut = useCallback(() => {
        togglePress();
        onPressOut === null || onPressOut === void 0 ? void 0 : onPressOut();
    }, [togglePress, onPressOut]);
    return (React.createElement(Pressable, Object.assign({ ref: ref, variants: variants, currentVariant: currentVariant, backgroundColor: backgroundColor, onPressIn: handlePressIn, onPressOut: handlePressOut }, others)));
});
BaseButton.displayName = 'BaseButton';
export { BaseButton };
//# sourceMappingURL=index.native.js.map