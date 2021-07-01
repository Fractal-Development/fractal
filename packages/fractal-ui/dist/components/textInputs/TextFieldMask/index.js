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
import { TextField } from '../TextField';
import { useUpdateValue } from './hooks/useUpdateValue';
import { getTextFieldMaskAccessibilityProps } from '../accessibility/getTextFieldMaskAccessibilityProps';
const TextFieldMask = forwardRef((_a, ref) => {
    var { onChangeText, type } = _a, others = __rest(_a, ["onChangeText", "type"]);
    const [value, setValue] = useState('');
    const updateValue = useUpdateValue(type);
    const handleChangeText = (text) => {
        const { maskedText, rawText } = updateValue(text, value);
        setValue(maskedText);
        onChangeText === null || onChangeText === void 0 ? void 0 : onChangeText(maskedText, rawText);
    };
    return React.createElement(TextField, Object.assign({ ref: ref, value: value, onChangeText: handleChangeText }, getTextFieldMaskAccessibilityProps(), others));
});
TextFieldMask.displayName = 'TextFieldMask';
export { TextFieldMask };
//# sourceMappingURL=index.js.map