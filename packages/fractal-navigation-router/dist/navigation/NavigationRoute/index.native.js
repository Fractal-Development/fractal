import React from 'react';
import { NavigationRouteContent } from './NavigationRouteContent';
import { useTheme } from '@bma98/fractal-ui';
export function NavigationRoute(props) {
    const theme = useTheme();
    return React.createElement(NavigationRouteContent, Object.assign({ backgroundColor: theme.colors.background }, props));
}
//# sourceMappingURL=index.native.js.map