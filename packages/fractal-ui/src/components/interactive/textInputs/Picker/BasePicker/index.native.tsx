import React, { forwardRef } from 'react';
import { Picker } from '@react-native-picker/picker';
import styled from 'styled-components/native';
import {
    extractTextProps,
    extractBackgroundProps,
    extractDimensionProps,
    extractDisplayProps,
    extractBorderProps
} from '../../../../../sharedProps';
import { BasePickerProps } from './types';

const StyledPicker = styled(Picker)`
    ${extractBackgroundProps};
    ${extractDimensionProps};
    ${extractDisplayProps};
    ${extractBorderProps};
    ${extractTextProps};
` as unknown as typeof Picker;

const BasePicker = forwardRef((props: BasePickerProps, ref: any): JSX.Element => <StyledPicker ref={ref} {...props} />);

BasePicker.displayName = 'BasePicker';

export { BasePicker };
