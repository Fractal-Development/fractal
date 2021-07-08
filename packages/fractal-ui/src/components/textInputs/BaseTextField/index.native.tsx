import React, { forwardRef, Ref } from 'react';
import styled from 'styled-components/native';
import { TextFieldProps } from './types';
import { extractBackgroundProps } from '../../../sharedProps/BackgroundProps';
import { extractBorderProps } from '../../../sharedProps/BorderProps';
import { extractDimensionProps } from '../../../sharedProps/DimensionProps';
import { extractDisplayProps } from '../../../sharedProps/DisplayProps';
import { extractTextProps } from '../../../sharedProps/TextProps';
import { TextInput } from 'react-native';
import { motify } from '@motify/core';
import { useVariantState } from '../../../animations/native/hooks/useVariantState';

const MotiTextInput = motify(TextInput)();

const StyledTextInput = styled(MotiTextInput)`
    ${extractBackgroundProps};
    ${extractDimensionProps};
    ${extractDisplayProps};
    ${extractBorderProps};
    ${extractTextProps};
`;

const BaseTextField = forwardRef(({ currentVariant, variants, ...others }: TextFieldProps, ref: Ref<TextInput>): JSX.Element => {
    const variantState = useVariantState(currentVariant, variants);
    return <StyledTextInput ref={ref} state={variantState} {...others} />;
});

BaseTextField.displayName = 'BaseTextField';

export { BaseTextField };
