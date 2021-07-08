import React, { forwardRef } from 'react';
import styled from 'styled-components/native';
import { extractBackgroundProps } from '../../../sharedProps/BackgroundProps';
import { extractBorderProps } from '../../../sharedProps/BorderProps';
import { extractDimensionProps } from '../../../sharedProps/DimensionProps';
import { extractDisplayProps } from '../../../sharedProps/DisplayProps';
import { extractTextProps } from '../../../sharedProps/TextProps';
import { TextInput } from 'react-native';
import { motify } from '@motify/core';
const MotiTextInput = motify(TextInput)();
const StyledTextInput = styled(MotiTextInput) `
    ${extractBackgroundProps};
    ${extractDimensionProps};
    ${extractDisplayProps};
    ${extractBorderProps};
    ${extractTextProps};
`;
const BaseTextField = forwardRef((props, ref) => {
    return React.createElement(StyledTextInput, Object.assign({ ref: ref }, props));
});
BaseTextField.displayName = 'BaseTextField';
export { BaseTextField };
//# sourceMappingURL=index.native.js.map