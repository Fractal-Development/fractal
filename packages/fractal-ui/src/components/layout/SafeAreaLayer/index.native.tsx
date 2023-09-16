import { MotiSafeAreaView } from 'moti';
import React, { forwardRef } from 'react';
import { styled } from 'nativewind';

import { useVariantState } from '../../../animations/native/hooks/useVariantState';
import { LayerProps } from '../Layer/types';

const StyledSafeAreaLayer = styled(MotiSafeAreaView) as any;

const SafeAreaLayer = forwardRef(({ currentVariant, variants, ...others }: LayerProps, ref: any): JSX.Element => {
    const variantState = useVariantState(currentVariant, variants);
    return <StyledSafeAreaLayer ref={ref} state={variantState} {...others} />;
});

SafeAreaLayer.displayName = 'Layer';

export { SafeAreaLayer };
