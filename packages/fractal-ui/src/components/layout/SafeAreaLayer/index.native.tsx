import { motify } from 'moti';
import React, { forwardRef } from 'react';
import { SafeAreaView } from 'react-native';
import styled from 'styled-components/native';

import { useVariantState } from '../../../animations/native/hooks/useVariantState';
import { FractalSharedCss } from '../../../sharedProps';
import { LayerProps } from '../Layer/types';

const MotiSafeAreaView = motify(SafeAreaView)();

const StyledSafeAreaLayer = styled(MotiSafeAreaView as any)`
    ${FractalSharedCss};
`;

const SafeAreaLayer = forwardRef(({ currentVariant, variants, ...others }: LayerProps, ref: any): JSX.Element => {
    const variantState = useVariantState(currentVariant, variants);
    return <StyledSafeAreaLayer ref={ref} state={variantState} {...others} />;
});

SafeAreaLayer.displayName = 'Layer';

export { SafeAreaLayer };
