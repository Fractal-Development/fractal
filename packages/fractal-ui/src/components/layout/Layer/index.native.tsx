import { MotiView } from 'moti';
import React, { forwardRef } from 'react';
import { styled } from 'nativewind';
import { LayerProps } from './types';
import { useVariantState } from '../../../animations/native/hooks/useVariantState';

const StyledLayer = styled(MotiView) as any;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Layer = forwardRef(({ currentVariant, variants, layout, className, ...others }: LayerProps, ref: any): JSX.Element => {
    const variantState = useVariantState(currentVariant, variants);
    return <StyledLayer ref={ref} state={variantState} className={className} {...others} />;
});

Layer.displayName = 'Layer';

export { Layer };
