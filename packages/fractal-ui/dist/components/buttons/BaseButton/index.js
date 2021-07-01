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
import { Pressable } from '../Pressable';
const BaseButton = forwardRef((_a, ref) => {
    var { pressedBackgroundColor, backgroundColor, whileHover, whileTap } = _a, others = __rest(_a, ["pressedBackgroundColor", "backgroundColor", "whileHover", "whileTap"]);
    const hoverStyles = Object.assign({ backgroundColor: pressedBackgroundColor }, whileHover);
    const tapStyles = Object.assign({ scale: 0.9, backgroundColor: pressedBackgroundColor }, whileTap);
    return (React.createElement(Pressable, Object.assign({ ref: ref, animate: { backgroundColor: backgroundColor }, backgroundColor: backgroundColor, whileHover: hoverStyles, whileTap: tapStyles }, others)));
});
BaseButton.displayName = 'BaseButton';
export { BaseButton };
//# sourceMappingURL=index.js.map