import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';

import { extractTextProps } from '../../../../../sharedProps';
import { PickerItemProps } from './types';

const StyledOption = styled(motion.option as any)`
    ${extractTextProps};
` as typeof motion.option;

export function PickerItem({ color, label, value, enabled = true }: PickerItemProps): JSX.Element {
    return (
        <StyledOption color={color} value={value} {...(!enabled && { disabled: true, hidden: true })}>
            {label}
        </StyledOption>
    );
}
