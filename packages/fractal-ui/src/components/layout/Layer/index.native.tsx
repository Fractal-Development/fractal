import { motify } from 'moti';
import React, { forwardRef } from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';

import { useVariantState } from '../../../animations/native/hooks/useVariantState';
import { FractalSharedCss } from '../../../sharedProps';
import { LayerProps } from './types';

const MotiView = motify(View)();

const StyledLayer = styled(MotiView as any)`
    ${FractalSharedCss};
`;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Layer = forwardRef(({ currentVariant, variants, layout, ...others }: LayerProps, ref: any): JSX.Element => {
    const variantState = useVariantState(currentVariant, variants);
    return <StyledLayer ref={ref} state={variantState} {...others} />;
});

Layer.displayName = 'Layer';

export { Layer };
