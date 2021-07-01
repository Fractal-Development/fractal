import React, { forwardRef } from 'react';
import styled from 'styled-components/native';
import { extractBackgroundProps } from '../../../sharedProps/BackgroundProps';
import { extractBorderProps } from '../../../sharedProps/BorderProps';
import { extractDimensionProps } from '../../../sharedProps/DimensionProps';
import { extractDisplayProps } from '../../../sharedProps/DisplayProps';
import { extractShadowProps } from '../../../sharedProps/ShadowProps';
import { extractTextProps } from '../../../sharedProps/TextProps';
import { Text } from 'react-native';
const StyledText = styled(Text) `
    ${extractBackgroundProps};
    ${extractDimensionProps};
    ${extractDisplayProps};
    ${extractBorderProps};
    ${extractShadowProps};
    ${extractTextProps};
`;
const BaseText = forwardRef((props, ref) => {
    return React.createElement(StyledText, Object.assign({ ref: ref }, props));
});
BaseText.displayName = 'BaseText';
export { BaseText };
//# sourceMappingURL=index.native.js.map