import { motion } from 'framer-motion';
import React, { useCallback, forwardRef } from 'react';
import styled from 'styled-components';

import {
    extractTextProps,
    extractBackgroundProps,
    extractDimensionProps,
    extractDisplayProps,
    extractBorderProps,
    extractWebProps
} from '../../../../../sharedProps';
import { getBasePickerAccessibilityProps } from '../../accessibility/getBasePickerAccessibilityProps';
import { BasePickerProps } from './types';

const StyledSelect = styled(motion.select as any)`
    appearance: none;
    cursor: pointer;
    ${extractBackgroundProps};
    ${extractDimensionProps};
    ${extractDisplayProps};
    ${extractBorderProps};
    ${extractTextProps};
    ${extractWebProps};
`;

const BasePicker = forwardRef(({ from, onValueChange, enabled, selectedValue, ...others }: BasePickerProps, ref: any): JSX.Element => {
    const handleChange = useCallback<any>(
        (e: { target: { selectedIndex: any; value: any } }) => {
            const { selectedIndex, value } = e.target;
            if (onValueChange) {
                onValueChange(value, selectedIndex);
            }
        },
        [onValueChange]
    );
    return (
        <StyledSelect
            ref={ref}
            required
            disabled={enabled === false ? true : undefined}
            onChange={handleChange}
            value={selectedValue}
            initial={from}
            {...getBasePickerAccessibilityProps()}
            {...others}
        />
    );
});

BasePicker.displayName = 'BasePicker';

export { BasePicker };
