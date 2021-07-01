import React, { forwardRef } from 'react';
import styled from 'styled-components/native';
import { ImageBackground as RNImageBackground } from 'react-native';
import Reanimated from 'react-native-reanimated';
import { extractBackgroundProps } from '../../../sharedProps/BackgroundProps';
import { extractDimensionProps } from '../../../sharedProps/DimensionProps';
import { extractDisplayProps } from '../../../sharedProps/DisplayProps';
import { extractBorderProps } from '../../../sharedProps/BorderProps';
import { extractShadowProps } from '../../../sharedProps/ShadowProps';
import { ImageBackgroundProps } from './types';
import { useAnimationStyles } from '../../../animations/native/hooks/useAnimationStyles';

const StyledImageBackground = styled(Reanimated.createAnimatedComponent(RNImageBackground))`
    ${extractBackgroundProps};
    ${extractDimensionProps};
    ${extractDisplayProps};
    ${extractBorderProps};
    ${extractShadowProps};
` as typeof styled.ImageBackground;

const ImageBackground = forwardRef(({ source, resizeMode, style, ...others }: ImageBackgroundProps, ref: any): JSX.Element => {
    const animationStyles = useAnimationStyles(others);

    return (
        <StyledImageBackground
            ref={ref}
            resizeMode={resizeMode}
            source={typeof source == 'string' ? { uri: source } : source}
            {...others}
            style={[animationStyles, style]}
        />
    );
});

ImageBackground.displayName = 'ImageBackground';

export { ImageBackground };
