import React, { forwardRef } from 'react';
import styled from 'styled-components/native';
import { motify } from '@motify/core';
import { extractBackgroundProps } from '../../../sharedProps/BackgroundProps';
import { extractBorderProps } from '../../../sharedProps/BorderProps';
import { extractDimensionProps } from '../../../sharedProps/DimensionProps';
import { extractDisplayProps } from '../../../sharedProps/DisplayProps';
import { extractShadowProps } from '../../../sharedProps/ShadowProps';
import { TouchableOpacity as RNTouchableOpacity } from 'react-native';
import { TouchableOpacityProps } from './types';

const MotiTouchableOpacity = motify(RNTouchableOpacity)();

const StyledTouchableOpacity = styled(MotiTouchableOpacity)`
    ${extractBackgroundProps};
    ${extractDimensionProps};
    ${extractDisplayProps};
    ${extractBorderProps};
    ${extractShadowProps};
`;

const TouchableOpacity = forwardRef((props: TouchableOpacityProps, ref: any): JSX.Element => {
    return <StyledTouchableOpacity ref={ref} {...props} />;
});

TouchableOpacity.displayName = 'TouchableOpacity';

export { TouchableOpacity };
