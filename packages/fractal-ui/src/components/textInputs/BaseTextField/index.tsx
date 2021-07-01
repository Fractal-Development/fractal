import React, { forwardRef, Ref } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { TextFieldProps } from './types';
import { extractBackgroundProps } from '../../../sharedProps/BackgroundProps';
import { extractBorderProps } from '../../../sharedProps/BorderProps';
import { extractDimensionProps } from '../../../sharedProps/DimensionProps';
import { extractDisplayProps } from '../../../sharedProps/DisplayProps';
import { extractTextProps } from '../../../sharedProps/TextProps';
import { extractWebProps } from '../../../sharedProps/WebProps';
import { extractPlaceholder } from '../../../sharedProps/PlaceholderProps';
import { getBaseTextFieldAccessibilityProps } from '../accessibility/getBaseTextFieldAccessibilityProps';

const StyledTextInput = styled(motion.input as any)`
    outline: none;
    border-width: 0;
    ${extractPlaceholder};
    ${extractBackgroundProps};
    ${extractDimensionProps};
    ${extractDisplayProps};
    ${extractBorderProps};
    ${extractTextProps};
    ${extractWebProps};
` as typeof motion.input;

const BaseTextField = forwardRef((props: TextFieldProps, ref: Ref<HTMLInputElement>): JSX.Element => {
    const { onChangeText, onSubmitEditing, placeholder, ...others } = props;

    const handleChange = (event: { target: { value: string } }): void => onChangeText && onChangeText(event.target.value);

    const handleKeydown = (keyboardEvent: React.KeyboardEvent<HTMLInputElement>): void => {
        if (keyboardEvent.key === 'Enter') {
            onSubmitEditing?.();
        }
    };

    return (
        <StyledTextInput
            ref={ref}
            placeholder={placeholder}
            selectable
            onChange={handleChange}
            onKeyDown={handleKeydown}
            {...getBaseTextFieldAccessibilityProps(placeholder)}
            {...others}
        />
    );
});

BaseTextField.displayName = 'BaseTextField';

export { BaseTextField };
