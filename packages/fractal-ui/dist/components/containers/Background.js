import React, { forwardRef } from 'react';
import { useTheme } from '../../context/hooks/useTheme';
import { Layer } from './Layer';
const Background = forwardRef((props, ref) => {
    const { colors } = useTheme();
    return React.createElement(Layer, Object.assign({ ref: ref, backgroundColor: colors.background, flex: 1 }, props));
});
Background.displayName = 'Background';
export { Background };
//# sourceMappingURL=Background.js.map