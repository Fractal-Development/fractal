import { motify } from 'moti';
import React, { forwardRef } from 'react';
import { Pressable as RNPressable } from 'react-native';
import styled from 'styled-components/native';

import { useVariantState } from '../../../../animations/native/hooks/useVariantState';
import {
    extractBackgroundProps,
    extractBorderProps,
    extractDimensionProps,
    extractDisplayProps,
    extractShadowProps
} from '../../../../sharedProps';
import { PressableProps } from './types';

const MotiPressable = motify(RNPressable)();

const StyledPressable = styled(MotiPressable as any)`
    ${extractBackgroundProps};
    ${extractDimensionProps};
    ${extractDisplayProps};
    ${extractBorderProps};
    ${extractShadowProps};
`;

const Pressable = forwardRef(({ currentVariant, variants, ...others }: PressableProps, ref: any): JSX.Element => {
    const variantState = useVariantState(currentVariant, variants);
    return <StyledPressable ref={ref} padding={0} state={variantState} {...others} />;
});

Pressable.displayName = 'Pressable';

export { Pressable };
