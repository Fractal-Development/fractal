import { motify } from 'moti';
import React, { forwardRef } from 'react';
import { ScrollView as RNScrollView } from 'react-native';
import styled from 'styled-components/native';

import { useVariantState } from '../../../animations/native/hooks/useVariantState';
import { FractalSharedCss } from '../../../sharedProps';
import { ScrollViewProps } from './types';

const MotiScrollView = motify(RNScrollView)();

const StyledScrollView = styled(MotiScrollView as any)`
    ${FractalSharedCss};
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
