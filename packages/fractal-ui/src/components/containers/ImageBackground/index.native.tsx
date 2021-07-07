import React, { forwardRef } from 'react';
import styled from 'styled-components/native';
import { ImageBackground as RNImageBackground } from 'react-native';
import {
    extractBackgroundProps,
    extractBorderProps,
    extractDimensionProps,
    extractDisplayProps,
    extractShadowProps
} from '../../../sharedProps';
import { ImageBackgroundProps } from './types';
import { motify } from '@motify/core';

const MotiImageBackground = motify(RNImageBackground)();

const StyledImageBackground = styled(MotiImageBackground)`
    ${extractBackgroundProps};
    ${extractDimensionProps};
    ${extractDisplayProps};
    ${extractBorderProps};
    ${extractShadowProps};
`;

const ImageBackground = forwardRef(({ source, ...others }: ImageBackgroundProps, ref: any): JSX.Element => {
    return <StyledImageBackground ref={ref} source={typeof source == 'string' ? { uri: source } : source} {...others} />;
});

ImageBackground.displayName = 'ImageBackground';

export { ImageBackground };
