import React, { ReactElement } from 'react';
import { StackScreenWebModalContainer } from './StackScreenWebModalContainer';
import { useScreenActivityState } from '../../../../hooks/useScreenActivityState';
import { StackScreenWebPushContainer } from './StackScreenWebPushContainer';
import { NavigationRouteProps } from '../../../NavigationRoute/types';

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
    }
    if (stackPresentation === 'modal') {
        return activityState > 0 ? <StackScreenWebModalContainer>{children}</StackScreenWebModalContainer> : null;
    }
    return <>{children}</>;
}
