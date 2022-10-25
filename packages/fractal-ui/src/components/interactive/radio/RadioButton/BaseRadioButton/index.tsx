import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';

import { getRadioButtonAccessibilityProps } from '../../accessibility/getRadioButtonAccessibilityProps';
import { BaseRadioButtonProps } from '../../types';
import { RadioControl } from '../RadioControl';

const Wrapper = styled(motion.label)`
    display: inline-flex;
    -webkit-box-align: center;
    align-items: center;
    vertical-align: top;
    cursor: pointer;
`;

const RadioInput = styled(motion.input)`
    border: 0px;
    clip: rect(0px, 0px, 0px, 0px);
    height: 1px;
    width: 1px;
    margin: -1px;
    padding: 0px;
    overflow: hidden;
    white-space: nowrap;
    position: absolute;
`;

export function BaseRadioButton({ label, onPress, active, value }: BaseRadioButtonProps): JSX.Element {
    return (
        <Wrapper>
            <RadioInput
                value={value}
                type='radio'
                checked={active}
                onChange={() => onPress()}
                {...getRadioButtonAccessibilityProps(active)}
            />
            <RadioControl active={active} label={label} />
        </Wrapper>
    );
}
