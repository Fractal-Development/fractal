import React from 'react';
import { NavigationRouteContent } from './NavigationRouteContent';
import { NavigationRouteProps } from './types/NavigationRouteProps';

export function NavigationRoute(props: NavigationRouteProps): JSX.Element | null {
    return <NavigationRouteContent {...props} />;
}
