import React from 'react';
import { LayerProps } from '../../../layout';
import { useTheme } from '../../../../core';
import { Box } from '../../../layout';

export function ModalCellSharedStyles(props: LayerProps): JSX.Element {
    const { borderRadius, colors } = useTheme();
    return <Box backgroundColor={colors.background} borderRadius={borderRadius.m} pointerEvents={'auto'} overflow={'hidden'} {...props} />;
}
