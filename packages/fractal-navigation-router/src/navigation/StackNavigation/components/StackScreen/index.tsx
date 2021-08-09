import React, { ReactElement } from 'react';
import { useHistory } from '../../../../router';
import { NavigationRouteProps } from '../../../NavigationRoute/types/NavigationRouteProps';
import { NavigationRoute } from '../../../NavigationRoute';
import { NavigationBar } from '@bma98/fractal-navigation';
import { useIsRootNavigationBar } from './hooks/useIsRootNavigationBar';

interface StackScreenProps extends NavigationRouteProps {
    navBarConfig?: ReactElement;
}

export function StackScreen({ navBarConfig, children, path, ...others }: StackScreenProps): JSX.Element {
    const { goBack } = useHistory();
    const isRootNavigationBar = useIsRootNavigationBar(path);

    return (
        <NavigationRoute
            top={0}
            left={0}
            right={0}
            bottom={0}
            position={'absolute'}
            overflow={'hidden'}
            {...others}
            path={path}
            onDismissed={goBack}
        >
            <NavigationBar showBackButton={!isRootNavigationBar} {...navBarConfig?.props} goBack={goBack} />
            {children}
        </NavigationRoute>
    );
}
