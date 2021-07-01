import React, { forwardRef } from 'react';
import { useTheme } from '../../context/hooks/useTheme';
import { Layer } from './Layer';
const PaddingLayer = forwardRef((props, ref) => {
    const { spacings } = useTheme();
    return React.createElement(Layer, Object.assign({ ref: ref, padding: spacings.m }, props));
});
PaddingLayer.displayName = 'PaddingLayer';
export { PaddingLayer };
//# sourceMappingURL=PaddingLayer.js.map