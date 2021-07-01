import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Check } from '../Check';
import { getCheckBoxAccessibilityProps } from '../accessibility/getCheckBoxAccessibilityProps';
const Wrapper = styled(motion.label) `
    cursor: pointer;
    display: inline-flex;
    -webkit-box-align: center;
    align-items: center;
    vertical-align: top;
    position: relative;
`;
const CheckBoxInput = styled(motion.input) `
    border: 0;
    clip: rect(0px, 0px, 0px, 0px);
    height: 1px;
    width: 1px;
    margin: -1px;
    padding: 0;
    overflow: hidden;
    white-space: nowrap;
    position: absolute;
`;
export function BaseCheckBox({ value, onValueChange, label }) {
    const handleValueChange = () => onValueChange === null || onValueChange === void 0 ? void 0 : onValueChange(!value);
    return (React.createElement(Wrapper, null,
        React.createElement(CheckBoxInput, Object.assign({ type: 'checkbox', checked: value, onChange: handleValueChange }, getCheckBoxAccessibilityProps(value))),
        React.createElement(Check, { value: value, label: label })));
}
//# sourceMappingURL=index.js.map