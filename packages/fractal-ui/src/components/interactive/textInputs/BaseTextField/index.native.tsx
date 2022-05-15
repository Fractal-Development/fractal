import React, { forwardRef, Ref } from 'react';
import styled from 'styled-components/native';
import { TextInput } from 'react-native';
import { motify } from '@motify/core';
import { TextFieldProps } from './types';
import {
    extractBackgroundProps,
    extractBorderProps,
    extractDimensionProps,
    extractDisplayProps,
    extractTextProps
} from '../../../../sharedProps';
import { useVariantState } from '../../../../animations/native/hooks/useVariantState';

const MotiTextInput = motify(TextInput)();

const StyledTextInput = styled(MotiTextInput as any)`
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
