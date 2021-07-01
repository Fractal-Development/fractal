import React, { forwardRef } from 'react';
import { useTheme } from '../../context/hooks/useTheme';
import { Layer } from './Layer';
const MarginLayer = forwardRef((props, ref) => {
    const { spacings } = useTheme();
    return React.createElement(Layer, Object.assign({ ref: ref, margin: spacings.m }, props));
});
MarginLayer.displayName = 'MarginLayer';
export { MarginLayer };
//# sourceMappingURL=MarginLayer.js.map