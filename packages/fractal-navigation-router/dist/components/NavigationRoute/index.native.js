import React from 'react';
import { useTheme } from '@bma98/fractal-ui';
import { NavigationRouteContent } from './components/NavigationRouteContent';
export function NavigationRoute(props) {
    const theme = useTheme();
    return React.createElement(NavigationRouteContent, Object.assign({ backgroundColor: theme.colors.background }, props));
}
//# sourceMappingURL=index.native.js.map