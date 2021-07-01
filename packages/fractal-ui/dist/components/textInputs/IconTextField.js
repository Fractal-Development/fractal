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
import { HorizontalLayer } from '../containers/HorizontalLayer';
import { useTheme } from '../../context/hooks/useTheme';
import { Layer } from '../containers/Layer';
import { BaseTextField } from './BaseTextField';
import { getIconTextFieldAccessibilityProps } from './accessibility/getIconTextFieldAccessibilityProps';
const IconTextField = forwardRef((_a, ref) => {
    var { leftImage, rightImage, value, placeholder, onChangeText, textFieldProps, inputRef } = _a, others = __rest(_a, ["leftImage", "rightImage", "value", "placeholder", "onChangeText", "textFieldProps", "inputRef"]);
    const { spacings, sizes, colors, borderRadius } = useTheme();
    const paddingLeft = leftImage != null ? spacings.xs : undefined;
    const paddingRight = rightImage != null ? spacings.xs : undefined;
    return (React.createElement(HorizontalLayer, Object.assign({ ref: ref, paddingLeft: spacings.xs, paddingRight: spacings.xs, borderRadius: borderRadius.s, height: sizes.textFieldHeight, backgroundColor: colors.textField, justifyContent: 'space-evenly', alignItems: 'center' }, others),
        leftImage != null ? (React.createElement(Layer, { flexShrink: 0, height: sizes.textFieldIconSize, width: sizes.textFieldIconSize }, leftImage(colors.placeholder, sizes.textFieldIconSize))) : null,
        React.createElement(BaseTextField, Object.assign({ ref: inputRef, paddingLeft: paddingLeft, paddingRight: paddingRight, flex: 1, value: value, color: colors.text, placeholderTextColor: colors.placeholder, fontSize: 14, onChangeText: onChangeText, placeholder: placeholder }, getIconTextFieldAccessibilityProps(), textFieldProps)),
        rightImage != null ? (React.createElement(Layer, { flexShrink: 0, height: sizes.textFieldIconSize, width: sizes.textFieldIconSize }, rightImage(colors.placeholder, sizes.textFieldIconSize))) : null));
});
IconTextField.displayName = 'IconTextField';
export { IconTextField };
//# sourceMappingURL=IconTextField.js.map