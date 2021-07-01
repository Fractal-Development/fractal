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
import { useTheme } from '../../context';
import { useControllableState } from '../../hooks/useControllableState';
import { Button } from '../buttons';
import { HorizontalLayer } from '../containers/HorizontalLayer';
import { IconTextField } from './IconTextField';
import { getButtonTextFieldAccessibilityProps } from './accessibility/getButtonTextFieldAccessibilityProps';
import { getButtonIconAccessibilityProps } from './accessibility/getButtonIconAccessibilityProps';
import { Layer } from '../containers';
const ButtonTextField = forwardRef((_a, ref) => {
    var _b;
    var { value, buttonImage, onChangeText, onButtonPress, buttonVariant = 'main', buttonText, showButton = true, buttonAriaLabel, leftImage, rightImage, textFieldProps, inputRef, placeholder, onSubmitEditing, useForegroundVariant } = _a, layerProps = __rest(_a, ["value", "buttonImage", "onChangeText", "onButtonPress", "buttonVariant", "buttonText", "showButton", "buttonAriaLabel", "leftImage", "rightImage", "textFieldProps", "inputRef", "placeholder", "onSubmitEditing", "useForegroundVariant"]);
    const { colors, sizes, spacings } = useTheme();
    const [text, setText] = useControllableState(value, '', onChangeText);
    const handleChangeText = (text) => {
        setText(text);
    };
    const handlePress = () => {
        onButtonPress === null || onButtonPress === void 0 ? void 0 : onButtonPress(text);
    };
    const handleSubmitEditing = () => {
        onSubmitEditing === null || onSubmitEditing === void 0 ? void 0 : onSubmitEditing(text);
    };
    return (React.createElement(HorizontalLayer, Object.assign({ ref: ref, alignItems: 'center', height: sizes.textFieldHeight }, layerProps),
        React.createElement(IconTextField, Object.assign({ value: text, flex: 1, placeholder: placeholder, leftImage: leftImage, rightImage: rightImage, textFieldProps: Object.assign(Object.assign({}, textFieldProps), { onSubmitEditing: (_b = textFieldProps === null || textFieldProps === void 0 ? void 0 : textFieldProps.onSubmitEditing) !== null && _b !== void 0 ? _b : handleSubmitEditing }), inputRef: inputRef, paddingLeft: spacings.xs, onChangeText: handleChangeText, backgroundColor: useForegroundVariant ? colors.foreground : colors.background }, getButtonTextFieldAccessibilityProps(buttonAriaLabel))),
        React.createElement(Layer, { marginLeft: showButton ? spacings.m : undefined }, showButton ? (React.createElement(Button, Object.assign({ ariaLabel: buttonAriaLabel, variant: buttonVariant, onPress: handlePress, text: buttonText }, getButtonIconAccessibilityProps(buttonAriaLabel)), buttonText == null && buttonImage ? buttonImage(colors.white, 22) : null)) : null)));
});
ButtonTextField.displayName = 'ButtonTextField';
export { ButtonTextField };
//# sourceMappingURL=ButtonTextField.js.map