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
import { Layer } from '../containers/Layer';
import { useControllableState } from '../../hooks/useControllableState';
import { RadioGroupItem } from './RadioGroupItem';
import { getRadioGroupAccessibilityProps } from './accessibility/getRadioGroupAccessibilityProps';
const RadioGroup = forwardRef((_a, ref) => {
    var { value, defaultValue, radioButtons, onValueChange } = _a, others = __rest(_a, ["value", "defaultValue", "radioButtons", "onValueChange"]);
    const [activeValue, setActiveValue] = useControllableState(value, defaultValue !== null && defaultValue !== void 0 ? defaultValue : '', onValueChange);
    const { flexDirection } = others;
    const handleChange = (value) => setActiveValue(value);
    // Memoizing the callback is hard because it depends on the active value, so it will be re generated everytime it changes.
    // It makes more sense to create a new component that depends only on primitives, and memoize that.
    const renderRadioButton = (item, index) => {
        return (React.createElement(RadioGroupItem, { key: item.value, item: item, isLastItem: index === radioButtons.length - 1, flexDirection: flexDirection, active: item.value == activeValue, handleChange: handleChange }));
    };
    return (React.createElement(Layer, Object.assign({ ref: ref }, others, getRadioGroupAccessibilityProps()), radioButtons.map(renderRadioButton)));
});
RadioGroup.displayName = 'RadioGroup';
export { RadioGroup };
//# sourceMappingURL=RadioGroup.js.map