import React, { useEffect } from 'react';
import { StackScreenWebModalContainer } from '../StackNavigation/components/StackScreenWebContainers/StackScreenWebModalContainer';
import { StackScreenWebContainer } from '../StackNavigation/components/StackScreenWebContainers/StackScreenWebContainer';
import { NavigationRouteContent } from './NavigationRouteContent';
import { useScreenActivityState } from './hooks/useScreenActivityState';
import { NavigationRouteProps } from './types/NavigationRouteProps';

export function NavigationRoute({ onDismissed, ...others }: NavigationRouteProps): JSX.Element | null {
    const { isTabScreen, path = '/', stackPresentation = 'push', isRootRoute = false } = others;
    const activityState = useScreenActivityState(path, isTabScreen ?? false);

    useEffect(() => {
        return () => {
            onDismissed?.();
        };
    }, []);

    if (stackPresentation === 'push' && !isTabScreen && !isRootRoute) {
        return (
            <StackScreenWebContainer>
                <NavigationRouteContent {...others} />
            </StackScreenWebContainer>
        );
    } else if (stackPresentation === 'modal') {
        return activityState > 0 ? (
            <StackScreenWebModalContainer>
                <NavigationRouteContent {...others} />
            </StackScreenWebModalContainer>
        ) : null;
    } else {
        return <NavigationRouteContent {...others} />;
    }
}
