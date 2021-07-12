import React, { forwardRef } from 'react';
import styled from 'styled-components/native';
import {
    extractBackgroundProps,
    extractBorderProps,
    extractDimensionProps,
    extractDisplayProps,
    extractShadowProps
} from '../../../sharedProps';
import { motify } from '@motify/core';
import { ScrollView as RNScrollView } from 'react-native';
import { ScrollViewProps } from './types';
import { useVariantState } from '../../../animations/native/hooks/useVariantState';

const MotiScrollView = motify(RNScrollView)();

const StyledScrollView = styled(MotiScrollView)`
    ${extractBackgroundProps};
    ${extractDimensionProps};
    ${extractDisplayProps};
    ${extractBorderProps};
    ${extractShadowProps};
`;

const ScrollView = forwardRef(({ currentVariant, variants, ...others }: ScrollViewProps, ref: any): JSX.Element => {
    const variantState = useVariantState(currentVariant, variants);
    return <StyledScrollView ref={ref} state={variantState} {...others} />;
});

ScrollView.displayName = 'Layer';

export { ScrollView };
