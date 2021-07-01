import React, { forwardRef } from 'react';
import { useTheme } from '../../context/hooks/useTheme';
import { PaddingLayer } from './PaddingLayer';
const Box = forwardRef((props, ref) => {
    const { colors, borderRadius, shadows } = useTheme();
    return (React.createElement(PaddingLayer, Object.assign({ ref: ref, backgroundColor: colors.foreground, borderRadius: borderRadius.m, boxShadow: shadows.mainShadow }, props)));
});
Box.displayName = 'Box';
export { Box };
//# sourceMappingURL=Box.js.map