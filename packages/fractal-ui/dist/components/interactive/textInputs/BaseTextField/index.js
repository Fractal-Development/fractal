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
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { extractBackgroundProps, extractBorderProps, extractDimensionProps, extractDisplayProps, extractTextProps, extractWebProps, extractPlaceholder } from '../../../../sharedProps';
import { getBaseTextFieldAccessibilityProps } from '../accessibility/getBaseTextFieldAccessibilityProps';
const StyledTextInput = styled(motion.input) `
    outline: none;
    border-width: 0;
    ${extractPlaceholder};
    ${extractBackgroundProps};
    ${extractDimensionProps};
    ${extractDisplayProps};
    ${extractBorderProps};
    ${extractTextProps};
    ${extractWebProps};
`;
const BaseTextField = forwardRef((_a, ref) => {
    var { onChangeText, onSubmitEditing, placeholder, secureTextEntry, from, currentVariant, animate } = _a, others = __rest(_a, ["onChangeText", "onSubmitEditing", "placeholder", "secureTextEntry", "from", "currentVariant", "animate"]);
    const handleChange = (event) => onChangeText && onChangeText(event.target.value);
    const handleKeydown = (keyboardEvent) => {
        if (keyboardEvent.key === 'Enter') {
            onSubmitEditing === null || onSubmitEditing === void 0 ? void 0 : onSubmitEditing();
        }
    };
    return (React.createElement(StyledTextInput, Object.assign({ ref: ref, placeholder: placeholder, selectable: true, onChange: handleChange, onKeyDown: handleKeydown, type: secureTextEntry ? 'password' : undefined, initial: currentVariant ? 'from' : from, animate: currentVariant !== null && currentVariant !== void 0 ? currentVariant : animate }, getBaseTextFieldAccessibilityProps(placeholder), others)));
});
BaseTextField.displayName = 'BaseTextField';
export { BaseTextField };
//# sourceMappingURL=index.js.map