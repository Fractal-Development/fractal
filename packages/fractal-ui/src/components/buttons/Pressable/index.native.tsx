import React, { forwardRef } from 'react';
import styled from 'styled-components/native';
import Reanimated from 'react-native-reanimated';
import { extractBackgroundProps } from '../../../sharedProps/BackgroundProps';
import { extractBorderProps } from '../../../sharedProps/BorderProps';
import { extractDimensionProps } from '../../../sharedProps/DimensionProps';
import { extractDisplayProps } from '../../../sharedProps/DisplayProps';
import { extractShadowProps } from '../../../sharedProps/ShadowProps';
import { Pressable as RNPressable } from 'react-native';
import { useAnimationStyles } from '../../../animations/native/hooks/useAnimationStyles';
import { PressableProps } from './types';
import { usePressableAnimationStyles } from '../../../animations/native/hooks/usePressableAnimationStyles';

const StyledPressable = styled(Reanimated.createAnimatedComponent(RNPressable as any))`
    ${extractBackgroundProps};
    ${extractDimensionProps};
    ${extractDisplayProps};
    ${extractBorderProps};
    ${extractShadowProps};
`;

const Pressable = forwardRef(({ style, ...others }: PressableProps, ref: any): JSX.Element => {
    const animationStyles = useAnimationStyles(others);
    const [tapStyles, handlePressIn, handlePressOut] = usePressableAnimationStyles(others);

    return (
        <StyledPressable
            ref={ref}
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
            style={[animationStyles, tapStyles, style]}
            {...others}
        />
    );
});

Pressable.displayName = 'Pressable';

export { Pressable };
