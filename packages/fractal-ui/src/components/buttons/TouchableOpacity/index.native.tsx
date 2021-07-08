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
import { useVariantState } from '../../../animations/native/hooks/useVariantState';

const MotiTouchableOpacity = motify(RNTouchableOpacity)();

const StyledTouchableOpacity = styled(MotiTouchableOpacity)`
    ${extractBackgroundProps};
    ${extractDimensionProps};
    ${extractDisplayProps};
    ${extractBorderProps};
    ${extractShadowProps};
`;

const TouchableOpacity = forwardRef(({ currentVariant, variants, ...others }: TouchableOpacityProps, ref: any): JSX.Element => {
    const variantState = useVariantState(currentVariant, variants);
    return <StyledTouchableOpacity ref={ref} state={variantState} {...others} />;
});

TouchableOpacity.displayName = 'TouchableOpacity';

export { TouchableOpacity };
