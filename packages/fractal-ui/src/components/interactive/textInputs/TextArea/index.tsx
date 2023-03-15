import React, { ChangeEvent } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { TextAreaProps } from './types';
import { useTheme } from '../../../../context/hooks/useTheme';
import {
    extractBackgroundProps,
    extractBorderProps,
    extractDimensionProps,
    extractDisplayProps,
    extractPlaceholder,
    extractTextProps,
    extractWebProps,
    shouldForwardProp
} from '../../../../sharedProps';

const StyledTextArea = styled(motion.textarea as any).withConfig({
    shouldForwardProp
})`
    appearance: none;
    outline: none;
    border-width: 0;
    ${extractPlaceholder};
    ${extractBackgroundProps};
    ${extractDimensionProps};
    ${extractDisplayProps};
    ${extractBorderProps};
    ${extractTextProps};
    ${extractWebProps};
    user-select: auto;
`;

export function TextArea({
    value,
    onChangeText,
    style,
    placeholder,
    numberOfLines = 1,
    editable = true,
    ...others
}: TextAreaProps): JSX.Element {
    const { colors, borderRadius, spacings, textVariants, sizes } = useTheme();

    const handleChangeText = (event: ChangeEvent<HTMLTextAreaElement>) => {
        onChangeText?.(event.target.value);
    };

    return (
        <StyledTextArea
            value={value}
            onChange={handleChangeText}
            placeholderTextColor={colors.placeholder}
            placeholder={placeholder}
            borderRadius={borderRadius.s}
            color={colors.text}
            backgroundColor={colors.textField}
            fontSize={14}
            padding={spacings.s}
            fontFamily={textVariants.normal.fontFamily}
            height={sizes.textFieldHeight}
            style={style}
            readOnly={!editable}
            dir='auto'
            rows={numberOfLines}
            {...others}
        />
    );
}
