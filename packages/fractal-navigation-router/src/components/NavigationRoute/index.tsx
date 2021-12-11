import React, { useEffect } from 'react';
import { useTheme } from '@bma98/fractal-ui';
import { NavigationRouteContent } from './components/NavigationRouteContent';
import { NavigationRouteProps } from './types/NavigationRouteProps';

export function NavigationRoute({ onDismissed, ...others }: NavigationRouteProps): JSX.Element | null {
    const theme = useTheme();

    useEffect(() => () => {
            onDismissed?.();
        }, [onDismissed]);

    return (
        <NavigationRouteContent
            backgroundColor={others.stackPresentation === 'push' ? theme.colors.background : 'transparent'}
            {...others}
        />
    );
}
