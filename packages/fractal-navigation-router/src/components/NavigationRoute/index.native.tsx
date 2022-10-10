import React from 'react';
import { useTheme } from '@bma98/fractal-ui';
import { NavigationRouteContent } from './NavigationRouteContent';
import { NavigationRouteProps } from './types';

export function NavigationRoute(props: NavigationRouteProps): JSX.Element | null {
    const theme = useTheme();
    return <NavigationRouteContent backgroundColor={theme.colors.background} {...props} />;
}
