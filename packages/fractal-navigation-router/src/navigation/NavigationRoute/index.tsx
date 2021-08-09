import React from 'react';
import { StackScreenWebModalContainer } from '../StackNavigation/components/StackScreenWebContainers/StackScreenWebModalContainer';
import { StackScreenWebContainer } from '../StackNavigation/components/StackScreenWebContainers/StackScreenWebContainer';
import { NavigationRouteContent } from './NavigationRouteContent';
import { useScreenActivityState } from './hooks/useScreenActivityState';
import { NavigationRouteProps } from './types/NavigationRouteProps';

export function NavigationRoute(props: NavigationRouteProps): JSX.Element | null {
    delete props.onDismissed;
    const { isTabScreen, path = '/', stackPresentation = 'push', isRootRoute = false } = props;
    const activityState = useScreenActivityState(path, isTabScreen ?? false);

    if (stackPresentation === 'push' && !isTabScreen && !isRootRoute) {
        return (
            <StackScreenWebContainer>
                <NavigationRouteContent {...props} />
            </StackScreenWebContainer>
        );
    } else if (stackPresentation === 'modal') {
        return activityState > 0 ? (
            <StackScreenWebModalContainer>
                <NavigationRouteContent {...props} />
            </StackScreenWebModalContainer>
        ) : null;
    } else {
        return <NavigationRouteContent {...props} />;
    }
}
