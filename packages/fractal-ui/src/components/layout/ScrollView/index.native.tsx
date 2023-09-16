import { MotiScrollView } from 'moti';
import React, { forwardRef } from 'react';
import { styled } from 'nativewind';

import { ScrollViewProps } from './types';
import { clsx } from 'clsx';
import { useVariantState } from '../../../animations/native/hooks/useVariantState';

const StyledScrollView = styled(MotiScrollView) as any;

const ScrollView = forwardRef(({ currentVariant, variants, horizontal, className, ...others }: ScrollViewProps, ref: any): JSX.Element => {
    const variantState = useVariantState(currentVariant, variants);

    return (
        <StyledScrollView
            ref={ref}
            state={variantState}
            horizontal={horizontal}
            className={clsx(horizontal && 'flex-row', horizontal && 'shrink', className)}
            {...others}
        />
    );
});

ScrollView.displayName = 'Layer';

export { ScrollView };
