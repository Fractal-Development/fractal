import React from 'react';
import { useTheme } from '../../../core';
import { Box } from '../../containers';
export function ModalCellSharedStyles(props) {
    const { borderRadius, colors } = useTheme();
    return React.createElement(Box, Object.assign({ backgroundColor: colors.background, borderRadius: borderRadius.m, pointerEvents: 'auto', overflow: 'hidden' }, props));
}
//# sourceMappingURL=ModalCellSharedStyles.js.map