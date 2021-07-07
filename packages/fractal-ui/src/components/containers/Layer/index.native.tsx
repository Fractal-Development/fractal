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
import { View } from 'react-native';
import { LayerProps } from './types';
import { useVariantState } from './hooks/useVariantState';

const MotiView = motify(View)();

const StyledLayer = styled(MotiView)`
    ${extractBackgroundProps};
    ${extractDimensionProps};
    ${extractDisplayProps};
    ${extractBorderProps};
    ${extractShadowProps};
`;

const Layer = forwardRef(({ currentVariant, variants, ...others }: LayerProps, ref: any): JSX.Element => {
    const variantState = useVariantState(currentVariant, variants);
    return <StyledLayer ref={ref} state={variantState} {...others} />;
});

Layer.displayName = 'Layer';

export { Layer };
