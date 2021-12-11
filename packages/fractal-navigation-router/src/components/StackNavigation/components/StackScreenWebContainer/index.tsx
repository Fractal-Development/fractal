import React, { ReactElement } from 'react';
import { NavigationRouteProps } from '../../../NavigationRoute/types/NavigationRouteProps';
import { StackScreenWebModalContainer } from './StackScreenWebModalContainer';
import { useScreenActivityState } from '../../../NavigationRoute/hooks/useScreenActivityState';
import { StackScreenWebPushContainer } from './StackScreenWebPushContainer';

export function StackScreenWebContainer({
    isTabScreen,
    path = '/',
    stackPresentation = 'push',
    isRootRoute = false,
    children
}: NavigationRouteProps): ReactElement | null {
    const activityState = useScreenActivityState(path, isTabScreen ?? false);

    if (stackPresentation === 'push' && !isTabScreen && !isRootRoute) {
        return <StackScreenWebPushContainer>{children}</StackScreenWebPushContainer>;
    } if (stackPresentation === 'modal') {
        return activityState > 0 ? <StackScreenWebModalContainer>{children}</StackScreenWebModalContainer> : null;
    } 
        return <>{children}</>;
    
}
