import React, { useEffect } from 'react';
import { NavigationRouteContent } from './NavigationRouteContent';
import { NavigationRouteProps } from './types/NavigationRouteProps';

export function NavigationRoute({ onDismissed, ...others }: NavigationRouteProps): JSX.Element | null {
    useEffect(() => {
        return () => {
            onDismissed?.();
        };
    }, []);

    return <NavigationRouteContent {...others} />;
}
