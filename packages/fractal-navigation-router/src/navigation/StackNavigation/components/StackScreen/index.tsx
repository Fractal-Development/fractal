import React, { ReactElement } from 'react';
import { useHistory } from '../../../../router';
import { NavigationRouteProps } from '../../../NavigationRoute/types/NavigationRouteProps';
import { NavigationRoute } from '../../../NavigationRoute';
import { NavigationBar } from '@bma98/fractal-navigation';
import { useShowNavigationBarBackButton } from './hooks/useShowNavigationBarBackButton';

interface StackScreenProps extends NavigationRouteProps {
    navBarConfig?: ReactElement;
}

export function StackScreen({ navBarConfig, children, path, ...others }: StackScreenProps): JSX.Element {
    const { goBack } = useHistory();
    const showNavigationBarButton = useShowNavigationBarBackButton(path);

    return (
        <NavigationRoute {...others} path={path} onDismissed={goBack}>
            <NavigationBar showBackButton={showNavigationBarButton} {...navBarConfig} goBack={goBack} />
            {children}
        </NavigationRoute>
    );
}