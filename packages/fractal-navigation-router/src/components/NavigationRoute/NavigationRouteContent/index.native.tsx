import { useTheme } from '@bma98/fractal-ui';
import React from 'react';
import { useIsInitialRenderDone } from '../../../hooks';
import { useNavigationRouteStyles } from '../../../hooks/useNavigationRouteStyles';
import { useScreenActivityState } from '../../../hooks/useScreenActivityState';
import { Screen } from '../../Screen';
import { NavigationRouteProps } from '../types';

export function NavigationRouteContent({ path, children, isTabScreen, ...others }: NavigationRouteProps): JSX.Element {
    const activityState = useScreenActivityState(path, isTabScreen);
    const [initialRenderDone] = useIsInitialRenderDone(activityState);
    const contentStyle = useNavigationRouteStyles();
    const theme = useTheme();

    return (
        <Screen
            width='100%'
            flex={1}
            activityState={activityState}
            active={activityState}
            style={contentStyle}
            backgroundColor={theme.colors.background}
            {...others}
        >
            {initialRenderDone ? <>{children}</> : <></>}
        </Screen>
    );
}
