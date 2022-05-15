import React, { forwardRef } from 'react';
import styled from 'styled-components/native';
import { motify } from '@motify/core';
import { TouchableOpacity as RNTouchableOpacity } from 'react-native';
import {
    extractBackgroundProps,
    extractBorderProps,
    extractDimensionProps,
    extractDisplayProps,
    extractShadowProps
} from '../../../../sharedProps';
import { TouchableOpacityProps } from './types';
import { useVariantState } from '../../../../animations/native/hooks/useVariantState';

const MotiTouchableOpacity = motify(RNTouchableOpacity)();

const StyledTouchableOpacity = styled(MotiTouchableOpacity as any)`
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
