import React, { forwardRef } from 'react';
import styled from 'styled-components/native';
import { motify } from '@motify/core';
import { extractBackgroundProps } from '../../../sharedProps/BackgroundProps';
import { extractBorderProps } from '../../../sharedProps/BorderProps';
import { extractDimensionProps } from '../../../sharedProps/DimensionProps';
import { extractDisplayProps } from '../../../sharedProps/DisplayProps';
import { extractShadowProps } from '../../../sharedProps/ShadowProps';
import { Pressable as RNPressable } from 'react-native';
import { PressableProps } from './types';
import { usePressableAnimationStyles } from '../../../animations/native/hooks/usePressableAnimationStyles';
import { useVariantState } from '../../../animations/native/hooks/useVariantState';

const MotiPressable = motify(RNPressable)();

const StyledPressable = styled(MotiPressable)`
    ${extractBackgroundProps};
    ${extractDimensionProps};
    ${extractDisplayProps};
    ${extractBorderProps};
    ${extractShadowProps};
`;

const Pressable = forwardRef(({ style, currentVariant, variants, ...others }: PressableProps, ref: any): JSX.Element => {
    const [tapStyles, handlePressIn, handlePressOut] = usePressableAnimationStyles(others);
    const variantState = useVariantState(currentVariant, variants);

    return (
        <StyledPressable
            ref={ref}
            padding={0}
            state={variantState}
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
            style={[tapStyles, style]}
            {...others}
        />
    );
});

Pressable.displayName = 'Pressable';

export { Pressable };
