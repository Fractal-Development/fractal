import React, { forwardRef } from 'react';
import styled from 'styled-components/native';
import { LayerProps } from './types';
import Reanimated from 'react-native-reanimated';
import {
    extractBackgroundProps,
    extractBorderProps,
    extractDimensionProps,
    extractDisplayProps,
    extractShadowProps
} from '../../../sharedProps';

import { useAnimationStyles } from '../../../animations/native/hooks/useAnimationStyles';

const StyledLayer = styled(Reanimated.View)`
    ${extractBackgroundProps};
    ${extractDimensionProps};
    ${extractDisplayProps};
    ${extractBorderProps};
    ${extractShadowProps};
` as typeof Reanimated.View;

const Layer = forwardRef(({ style, ...others }: LayerProps, ref: any): JSX.Element => {
    const animationStyles = useAnimationStyles(others);
    return <StyledLayer ref={ref} {...others} style={[animationStyles, style]} />;
});

Layer.displayName = 'Layer';

export { Layer };
