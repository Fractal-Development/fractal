import React, { memo } from 'react';
import { Layer, useTheme } from '@bma98/fractal-ui';
import { cssPosition } from '../nativeNavigationBarViews/cssPosition';
import { useTabBarInsets } from '../../TabBar/hooks/useTabBarInsets';
export const NavigationBarBackground = memo(({ children }) => {
    const { spacings, shadows, colors } = useTheme();
    const { left, right } = useTabBarInsets();
    return (React.createElement(Layer, { backgroundColor: colors.foreground, flexDirection: 'row', height: 50, boxShadow: shadows.mainShadow, width: '100%', zIndex: 2000, paddingLeft: spacings.m, paddingRight: spacings.m, position: cssPosition, top: 0, left: left, right: right }, children));
});
//# sourceMappingURL=NavigationBarBackground.js.map