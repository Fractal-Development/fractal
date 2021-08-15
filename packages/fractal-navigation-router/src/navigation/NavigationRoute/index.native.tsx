import React from 'react';
import { NavigationRouteContent } from './components/NavigationRouteContent';
import { NavigationRouteProps } from './types/NavigationRouteProps';
import { useTheme } from '@bma98/fractal-ui';

export function NavigationRoute(props: NavigationRouteProps): JSX.Element | null {
    const theme = useTheme();
    return <NavigationRouteContent backgroundColor={theme.colors.background} {...props} />;
}
