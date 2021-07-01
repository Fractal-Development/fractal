import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { extractTextProps } from '../../../../sharedProps/TextProps';
import { PickerItemProps } from './types';

const StyledOption = styled(motion.option as any)`
    ${extractTextProps};
` as typeof motion.option;

export function PickerItem({ color, label, value }: PickerItemProps): JSX.Element {
    return (
        <StyledOption color={color} value={value} label={label}>
            {label}
        </StyledOption>
    );
}
