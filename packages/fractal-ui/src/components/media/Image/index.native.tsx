import React, { forwardRef } from 'react';
import styled from 'styled-components/native';
import { Image as RNImage } from 'react-native';
import { motify } from '@motify/core';
import {
    extractBackgroundProps,
    extractBorderProps,
    extractDimensionProps,
    extractDisplayProps,
    extractShadowProps
} from '../../../sharedProps';
import { ImageProps } from './types';
import { useVariantState } from '../../../animations/native/hooks/useVariantState';

const MotiImage = motify(RNImage)();

const StyledImage = styled(MotiImage as any)`
    ${extractBackgroundProps};
    ${extractDimensionProps};
    ${extractDisplayProps};
    ${extractBorderProps};
    ${extractShadowProps};
`;

const Image = forwardRef(({ source, resizeMode, currentVariant, variants, ...others }: ImageProps, ref: any): JSX.Element => {
    const variantState = useVariantState(currentVariant, variants);
    return (
        <StyledImage
            ref={ref}
            state={variantState}
            source={typeof source === 'string' ? { uri: source } : source}
            resizeMode={resizeMode}
            {...others}
        />
    );
});

Image.displayName = 'Image';

export { Image };
