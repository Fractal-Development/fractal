import { useTheme } from '@bma98/fractal-ui';
import React from 'react';
import { useScreenActivityState, useIsInitialRenderDone } from '../../../hooks';
import { Screen } from '../../Screen';
import { NavigationRouteProps } from '../types';

export function NavigationRouteContent({ path, children, isTabScreen }: NavigationRouteProps): JSX.Element {
    const activityState = useScreenActivityState(path, isTabScreen);
    const [initialRenderDone] = useIsInitialRenderDone(activityState);
    const theme = useTheme();

    return (
        <Screen
            activityState={activityState}
            active={activityState}
            display={activityState === 0 ? 'none' : 'flex'}
            top={0}
            left={0}
            right={0}
            bottom={0}
            position='absolute'
            backgroundColor={theme.colors.background}
        >
            {initialRenderDone ? <>{children}</> : <></>}
        </Screen>
    );
}
