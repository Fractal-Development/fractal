import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Check } from '../Check';
import { BaseCheckBoxProps } from '../types';
import { getCheckBoxAccessibilityProps } from '../accessibility/getCheckBoxAccessibilityProps';

const Wrapper = styled(motion.label)`
    cursor: pointer;
    display: inline-flex;
    -webkit-box-align: center;
    align-items: center;
    vertical-align: top;
    position: relative;
`;

const CheckBoxInput = styled(motion.input)`
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

export function BaseCheckBox({ value, onValueChange, label }: BaseCheckBoxProps): JSX.Element {
    const handleValueChange = (): void => onValueChange?.(!value);

    return (
        <Wrapper>
            <CheckBoxInput type='checkbox' checked={value} onChange={handleValueChange} {...getCheckBoxAccessibilityProps(value)} />
            <Check value={value} label={label} />
        </Wrapper>
    );
}
