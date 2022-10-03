import React from 'react';
import { useScreenActivityState } from '../hooks/useScreenActivityState';
import { useIsInitialRenderDone } from '../../../hooks';
import { useNavigationRouteStyles } from '../hooks/useNavigationRouteStyles';
import { StackPresentationTypeProvider } from '../../StackNavigation';
import { Screen } from '../..';
import { NavigationRouteProps } from '../types/NavigationRouteProps';

export function NavigationRouteContent({
    path = '/',
    style,
    children,
    isTabScreen,
    stackPresentation = 'push',
    ...others
}: NavigationRouteProps): JSX.Element | null {
    const activityState = useScreenActivityState(path, isTabScreen ?? false);
    const [initialRenderDone] = useIsInitialRenderDone(activityState);
    const contentStyle = useNavigationRouteStyles(style);

    return (
        <Screen
            width='100%'
            flex={1}
            activityState={activityState}
            active={activityState}
            stackPresentation={stackPresentation}
            style={contentStyle}
            {...others}
        >
            <StackPresentationTypeProvider stackPresentation={stackPresentation}>
                {initialRenderDone ? <>{children}</> : <></>}
            </StackPresentationTypeProvider>
        </Screen>
    );
}
