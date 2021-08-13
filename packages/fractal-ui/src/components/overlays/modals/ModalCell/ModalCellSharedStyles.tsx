import React from 'react';
import { Layer, LayerProps } from '../../../layout';
import { useTheme } from '../../../../core';

export function ModalCellSharedStyles(props: LayerProps): JSX.Element {
    const { borderRadius, colors } = useTheme();
    return (
        <Layer backgroundColor={colors.background} borderRadius={borderRadius.m} pointerEvents={'auto'} overflow={'hidden'} {...props} />
    );
}
