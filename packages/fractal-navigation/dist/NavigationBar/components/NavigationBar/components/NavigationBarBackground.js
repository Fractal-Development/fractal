import React, { memo } from 'react';
import { Layer, useTheme } from '@bma98/fractal-ui';
export const NavigationBarBackground = memo(({ children, backgroundColor }) => {
    const { spacings, navigationBar } = useTheme();
    return (React.createElement(Layer, { backgroundColor: backgroundColor || navigationBar.backgroundColor, flexDirection: 'row', height: navigationBar.height, boxShadow: navigationBar.shadow, zIndex: 2000, paddingLeft: spacings.m, paddingRight: spacings.m, position: 'absolute', top: 0, left: 0, right: 0 }, children));
});
NavigationBarBackground.displayName = 'NavigationBarBackground';
//# sourceMappingURL=NavigationBarBackground.js.map