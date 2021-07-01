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
import { extractBackgroundProps } from '../../../sharedProps/BackgroundProps';
import { extractBorderProps } from '../../../sharedProps/BorderProps';
import { extractDimensionProps } from '../../../sharedProps/DimensionProps';
import { extractDisplayProps } from '../../../sharedProps/DisplayProps';
import { extractTextProps } from '../../../sharedProps/TextProps';
import { extractWebProps } from '../../../sharedProps/WebProps';
import { extractPlaceholder } from '../../../sharedProps/PlaceholderProps';
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
const BaseTextField = forwardRef((props, ref) => {
    const { onChangeText, onSubmitEditing, placeholder } = props, others = __rest(props, ["onChangeText", "onSubmitEditing", "placeholder"]);
    const handleChange = (event) => onChangeText && onChangeText(event.target.value);
    const handleKeydown = (keyboardEvent) => {
        if (keyboardEvent.key === 'Enter') {
            onSubmitEditing === null || onSubmitEditing === void 0 ? void 0 : onSubmitEditing();
        }
    };
    return (React.createElement(StyledTextInput, Object.assign({ ref: ref, placeholder: placeholder, selectable: true, onChange: handleChange, onKeyDown: handleKeydown }, getBaseTextFieldAccessibilityProps(placeholder), others)));
});
BaseTextField.displayName = 'BaseTextField';
export { BaseTextField };
//# sourceMappingURL=index.js.map