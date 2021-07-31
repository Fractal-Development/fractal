import React, { memo } from 'react';
import { Layer, useTheme } from '@bma98/fractal-ui';
import { navigationBarBackgroundCSSPosition } from './navigationBarBackgroundCSSPosition';
import { useTabBarInsets } from '../../TabBar/hooks/useTabBarInsets';
export const NavigationBarBackground = memo(({ children }) => {
    const { spacings, shadows, colors } = useTheme();
    const { left, right } = useTabBarInsets();
    return (React.createElement(Layer, { backgroundColor: colors.foreground, flexDirection: 'row', height: 50, boxShadow: shadows.mainShadow, zIndex: 2000, paddingLeft: spacings.m, paddingRight: spacings.m, position: navigationBarBackgroundCSSPosition, top: 0, left: left, right: right }, children));
});
NavigationBarBackground.displayName = 'NavigationBarBackground';
//# sourceMappingURL=NavigationBarBackground.js.map