import React, { forwardRef } from 'react';
import { Picker } from '@react-native-picker/picker';
import { extractTextProps } from '../../../../sharedProps/TextProps';
import styled from 'styled-components/native';
import { extractBackgroundProps } from '../../../../sharedProps/BackgroundProps';
import { extractDimensionProps } from '../../../../sharedProps/DimensionProps';
import { extractDisplayProps } from '../../../../sharedProps/DisplayProps';
import { extractBorderProps } from '../../../../sharedProps/BorderProps';
const StyledPicker = styled(Picker) `
    ${extractBackgroundProps};
    ${extractDimensionProps};
    ${extractDisplayProps};
    ${extractBorderProps};
    ${extractTextProps};
`;
const BasePicker = forwardRef((props, ref) => {
    return React.createElement(StyledPicker, Object.assign({ ref: ref }, props));
});
BasePicker.displayName = 'BasePicker';
export { BasePicker };
//# sourceMappingURL=index.native.js.map