import React, { forwardRef } from 'react';
import styled from 'styled-components/native';
import { motify } from '@motify/core';
import { ScrollView as RNScrollView } from 'react-native';
import { ScrollViewProps } from './types';
import { useVariantState } from '../../../animations/native/hooks/useVariantState';
import { SharedStyles } from '../../../sharedProps/SharedStyles';

const MotiScrollView = motify(RNScrollView)();

const StyledScrollView = styled(MotiScrollView)`
    ${SharedStyles};
`;

const ScrollView = forwardRef(
    ({ currentVariant, variants, horizontal, flexShrink, flexDirection, ...others }: ScrollViewProps, ref: any): JSX.Element => {
        const variantState = useVariantState(currentVariant, variants);
        return (
            <StyledScrollView
                ref={ref}
                state={variantState}
                horizontal={horizontal}
                flexDirection={horizontal ? 'row' : flexDirection}
                flexShrink={horizontal && flexShrink === undefined ? 1 : flexShrink}
                {...others}
            />
        );
    }
);

ScrollView.displayName = 'Layer';

export { ScrollView };
