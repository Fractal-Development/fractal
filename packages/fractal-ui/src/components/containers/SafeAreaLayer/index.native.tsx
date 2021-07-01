import React, { forwardRef } from 'react';
import styled from 'styled-components/native';
import Reanimated from 'react-native-reanimated';
import { extractBackgroundProps } from '../../../sharedProps/BackgroundProps';
import { extractBorderProps } from '../../../sharedProps/BorderProps';
import { extractDimensionProps } from '../../../sharedProps/DimensionProps';
import { extractDisplayProps } from '../../../sharedProps/DisplayProps';
import { extractShadowProps } from '../../../sharedProps/ShadowProps';
import { SafeAreaView } from 'react-native';
import { useAnimationStyles } from '../../../animations/native/hooks/useAnimationStyles';
import { LayerProps } from '../Layer/types';

const StyledLayer = styled(Reanimated.createAnimatedComponent(SafeAreaView))`
    ${extractBackgroundProps};
    ${extractDimensionProps};
    ${extractDisplayProps};
    ${extractBorderProps};
    ${extractShadowProps};
` as typeof Reanimated.View;

const SafeAreaLayer = forwardRef(({ style, ...others }: LayerProps, ref: any): JSX.Element => {
    const animationStyles = useAnimationStyles(others);
    return <StyledLayer ref={ref} {...others} style={[animationStyles, style]} />;
});

SafeAreaLayer.displayName = 'SafeAreaLayer';

export { SafeAreaLayer };
