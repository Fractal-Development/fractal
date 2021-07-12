import React, { forwardRef } from 'react';
import { Picker } from '@react-native-picker/picker';
import { extractTextProps, extractBackgroundProps, extractDimensionProps, extractDisplayProps, extractBorderProps } from '../../../../../sharedProps';
import styled from 'styled-components/native';
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