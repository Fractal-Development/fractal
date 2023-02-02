import React from 'react';
import { motify } from 'moti';
import { useTheme } from '../../../../context/hooks/useTheme';
import { TextAreaProps } from './types';
import { TextInput } from 'react-native';
import styled from 'styled-components/native';
import {
    extractBackgroundProps,
    extractBorderProps,
    extractDimensionProps,
    extractDisplayProps,
    extractTextProps
} from '../../../../sharedProps';

const MotiTextInput = motify(TextInput)();

const StyledTextInput = styled(MotiTextInput as any)`
    ${extractBackgroundProps};
    ${extractDimensionProps};
    ${extractDisplayProps};
    ${extractBorderProps};
    ${extractTextProps};
`;

export function TextArea({ value, onChangeText, style, placeholder, numberOfLines, editable, ...others }: TextAreaProps): JSX.Element {
    const { colors, borderRadius, spacings } = useTheme();
    return (
        <StyledTextInput
            value={value}
            onChangeText={onChangeText}
            placeholderTextColor={colors.placeholder}
            placeholder={placeholder}
            borderRadius={borderRadius.s}
            color={colors.text}
            backgroundColor={colors.textField}
            fontSize={14}
            padding={spacings.s}
            style={style}
            multiline
            numberOfLines={numberOfLines}
            editable={editable}
            textAlignVertical='top'
            {...others}
        />
    );
}
