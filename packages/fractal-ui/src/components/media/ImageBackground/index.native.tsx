import { motify } from 'moti';
import React, { forwardRef } from 'react';
import { ImageBackground as RNImageBackground } from 'react-native';
import styled from 'styled-components/native';

import { useVariantState } from '../../../animations/native/hooks/useVariantState';
import {
    extractBackgroundProps,
    extractBorderProps,
    extractDimensionProps,
    extractDisplayProps,
    extractShadowProps
} from '../../../sharedProps';
import { ImageBackgroundProps } from './types';

const MotiImageBackground = motify(RNImageBackground)();

const StyledImageBackground = styled(MotiImageBackground as any)`
    ${extractBackgroundProps};
    ${extractDimensionProps};
    ${extractDisplayProps};
    ${extractBorderProps};
    ${extractShadowProps};
`;

const ImageBackground = forwardRef(({ source, currentVariant, variants, ...others }: ImageBackgroundProps, ref: any): JSX.Element => {
    const variantState = useVariantState(currentVariant, variants);
    return (
        <StyledImageBackground ref={ref} state={variantState} source={typeof source === 'string' ? { uri: source } : source} {...others} />
    );
});

ImageBackground.displayName = 'ImageBackground';

export { ImageBackground };
