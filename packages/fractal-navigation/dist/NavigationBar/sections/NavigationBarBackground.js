import React, { memo } from 'react';
import { Layer, useTheme } from '@bma98/fractal-ui';
export const NavigationBarBackground = memo(({ children }) => {
    const { spacings, shadows, colors } = useTheme();
    return (React.createElement(Layer, { backgroundColor: colors.foreground, flexDirection: 'row', height: 50, boxShadow: shadows.mainShadow, width: '100%', zIndex: 2000, paddingLeft: spacings.m, paddingRight: spacings.m }, children));
});
//# sourceMappingURL=NavigationBarBackground.js.map