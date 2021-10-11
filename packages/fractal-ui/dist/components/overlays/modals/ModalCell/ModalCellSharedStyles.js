import React from 'react';
import { Layer } from '../../../layout';
import { useTheme } from '../../../../core';
export function ModalCellSharedStyles(props) {
    const { borderRadius, colors } = useTheme();
    return (React.createElement(Layer, Object.assign({ backgroundColor: colors.background, borderRadius: borderRadius.m, pointerEvents: "auto", overflow: "hidden" }, props)));
}
//# sourceMappingURL=ModalCellSharedStyles.js.map