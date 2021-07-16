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
import React, { useCallback, forwardRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { extractTextProps, extractBackgroundProps, extractDimensionProps, extractDisplayProps, extractBorderProps, extractWebProps } from '../../../../../sharedProps';
import { getBasePickerAccessibilityProps } from '../../accessibility/getBasePickerAccessibilityProps';
const StyledSelect = styled(motion.select) `
    appearance: none;
    cursor: pointer;
    ${extractBackgroundProps};
    ${extractDimensionProps};
    ${extractDisplayProps};
    ${extractBorderProps};
    ${extractTextProps};
    ${extractWebProps};
`;
const BasePicker = forwardRef((_a, ref) => {
    var { from, onValueChange, enabled, selectedValue } = _a, others = __rest(_a, ["from", "onValueChange", "enabled", "selectedValue"]);
    const handleChange = useCallback((e) => {
        const { selectedIndex, value } = e.target;
        if (onValueChange) {
            onValueChange(value, selectedIndex);
        }
    }, [onValueChange]);
    return (React.createElement(StyledSelect, Object.assign({ ref: ref, disabled: enabled === false ? true : undefined, onChange: handleChange, value: selectedValue, initial: from }, getBasePickerAccessibilityProps(), others)));
});
BasePicker.displayName = 'BasePicker';
export { BasePicker };
//# sourceMappingURL=index.js.map