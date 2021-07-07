import React, { forwardRef } from 'react';
import styled from 'styled-components/native';
import {
    extractBackgroundProps,
    extractBorderProps,
    extractDimensionProps,
    extractDisplayProps,
    extractShadowProps
} from '../../sharedProps';
import { Image as RNImage } from 'react-native';
import { motify } from '@motify/core';
import { ImageProps } from './types';

const MotiImage = motify(RNImage)();

const StyledImage = styled(MotiImage)`
    ${extractBackgroundProps};
    ${extractDimensionProps};
    ${extractDisplayProps};
    ${extractBorderProps};
    ${extractShadowProps};
`;

const Image = forwardRef(({ source, resizeMode, ...others }: ImageProps, ref: any): JSX.Element => {
    return <StyledImage ref={ref} source={typeof source == 'string' ? { uri: source } : source} resizeMode={resizeMode} {...others} />;
});

Image.displayName = 'Image';

export { Image };
