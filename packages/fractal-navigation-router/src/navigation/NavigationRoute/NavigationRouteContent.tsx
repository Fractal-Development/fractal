import React, { useCallback } from 'react';
import { Route } from '../../router';
import { useScreenActivityState } from './hooks/useScreenActivityState';
import { useIsInitialRenderDone } from '../../hooks';
import { useNavigationRouteStyles } from './hooks/useNavigationRouteStyles';
import { StackPresentationTypeProvider } from '../StackNavigation/context/StackPresentationTypeProvider';
import { Screen } from '../../components/Screen';
import { NavigationRouteProps } from './types/NavigationRouteProps';

export function NavigationRouteContent({
    path = '/',
    style,
    children,
    isTabScreen,
    stackPresentation = 'push',
    isRootRoute = false,
    ...others
}: NavigationRouteProps): JSX.Element | null {
    const renderChildren = useCallback(() => children, [children]);
    const activityState = useScreenActivityState(path, isTabScreen ?? false);
    const [initialRenderDone] = useIsInitialRenderDone(activityState);
    const contentStyle = useNavigationRouteStyles(style);

    return (
        <Screen {...others} activityState={activityState} active={activityState} stackPresentation={stackPresentation} style={contentStyle}>
            <StackPresentationTypeProvider stackPresentation={stackPresentation}>
                <Route path={path}>{initialRenderDone ? renderChildren : null}</Route>
            </StackPresentationTypeProvider>
        </Screen>
    );
}
