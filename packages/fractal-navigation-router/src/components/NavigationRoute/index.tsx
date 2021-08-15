import React, { useEffect } from 'react';
import { NavigationRouteContent } from './components/NavigationRouteContent';
import { NavigationRouteProps } from './types/NavigationRouteProps';
import { useTheme } from '@bma98/fractal-ui';

export function NavigationRoute({ onDismissed, ...others }: NavigationRouteProps): JSX.Element | null {
    const theme = useTheme();

    useEffect(() => {
        return () => {
            onDismissed?.();
        };
    }, [onDismissed]);

    return (
        <NavigationRouteContent
            backgroundColor={others.stackPresentation === 'push' ? theme.colors.background : 'transparent'}
            {...others}
        />
    );
}
