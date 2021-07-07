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

const MotiTextInput = motify(TextInput)();

const StyledTextInput = styled(MotiTextInput)`
    ${extractBackgroundProps};
    ${extractDimensionProps};
    ${extractDisplayProps};
    ${extractBorderProps};
    ${extractTextProps};
`;

const BaseTextField = forwardRef((props: TextFieldProps, ref: Ref<TextInput>): JSX.Element => {
    return <StyledTextInput ref={ref} {...props} />;
});

BaseTextField.displayName = 'BaseTextField';

export { BaseTextField };
