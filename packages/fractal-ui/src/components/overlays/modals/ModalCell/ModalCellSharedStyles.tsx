import React from 'react';

import { useTheme } from '../../../../core';
import { Layer, LayerProps } from '../../../layout';

export function ModalCellSharedStyles(props: LayerProps): JSX.Element {
    const { borderRadius, colors } = useTheme();
    return <Layer backgroundColor={colors.background} borderRadius={borderRadius.m} pointerEvents='auto' overflow='hidden' {...props} />;
}
