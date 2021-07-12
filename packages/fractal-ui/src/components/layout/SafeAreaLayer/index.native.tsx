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
import { SafeAreaView } from 'react-native';
import { LayerProps } from '../Layer/types';
import { useVariantState } from '../../../animations/native/hooks/useVariantState';

const MotiSafeAreaView = motify(SafeAreaView)();

const StyledSafeAreaLayer = styled(MotiSafeAreaView)`
    ${extractBackgroundProps};
    ${extractDimensionProps};
    ${extractDisplayProps};
    ${extractBorderProps};
    ${extractShadowProps};
`;

const SafeAreaLayer = forwardRef(({ currentVariant, variants, ...others }: LayerProps, ref: any): JSX.Element => {
    const variantState = useVariantState(currentVariant, variants);
    return <StyledSafeAreaLayer ref={ref} state={variantState} {...others} />;
});

SafeAreaLayer.displayName = 'Layer';

export { SafeAreaLayer };
