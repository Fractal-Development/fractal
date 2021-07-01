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
import React, { useState, forwardRef } from 'react';
import { Pressable } from '../buttons';
import { Layer } from '../containers';
import { CheckIcon } from '../../assets/CheckIcon';
const styleVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1 }
};
function getVariant(active) {
    return active ? styleVariants.visible : styleVariants.hidden;
}
const ColorToggle = forwardRef((_a, ref) => {
    var { onActiveChange, backgroundColor, active } = _a, others = __rest(_a, ["onActiveChange", "backgroundColor", "active"]);
    const [uncontrolledActive, setUncontrolledActive] = useState(!!active);
    const variant = getVariant(active != null ? active : uncontrolledActive);
    const handleControlledActiveToggle = () => {
        if (onActiveChange) {
            onActiveChange(!active, backgroundColor);
        }
    };
    const handleUncontrolledActiveToggle = () => {
        setUncontrolledActive((uncontrolledActive) => {
            const newValue = !uncontrolledActive;
            if (onActiveChange != null) {
                onActiveChange(newValue, backgroundColor);
            }
            return newValue;
        });
    };
    const handlePress = () => {
        if (active != null) {
            handleControlledActiveToggle();
        }
        else {
            handleUncontrolledActiveToggle();
        }
    };
    return (React.createElement(Pressable, Object.assign({ ref: ref, onPress: handlePress, width: 40, height: 40, borderRadius: 20, justifyContent: 'center', alignItems: 'center', backgroundColor: backgroundColor }, others),
        React.createElement(Layer, { initial: variant, animate: variant, variants: styleVariants },
            React.createElement(CheckIcon, { height: 24, width: 24, fill: 'white' }))));
});
ColorToggle.displayName = 'ColorToggle';
export { ColorToggle };
//# sourceMappingURL=ColorToggle.js.map