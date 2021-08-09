import React, { ReactElement } from 'react';
import { Platform, StatusBar } from 'react-native';
import { useHistory } from '../../../../router';
import { NavigationRouteProps } from '../../../NavigationRoute/types/NavigationRouteProps';
import { NavigationRoute } from '../../../NavigationRoute';
import { NativeNavigationBar, NavigationBar } from '@bma98/fractal-navigation';
import { useIsRootNavigationBar } from './hooks/useIsRootNavigationBar';

interface StackScreenProps extends NavigationRouteProps {
    navBarConfig?: ReactElement;
}

export function StackScreen({ children, navBarConfig, stackPresentation = 'push', path, ...others }: StackScreenProps): JSX.Element {
    const { goBack } = useHistory();
    const showNavigationBarButton = useIsRootNavigationBar(path);
    const isNavigationBarForModal =
        stackPresentation === 'modal' && navBarConfig != null && (Platform.OS === 'ios' || Platform.OS === 'android');

    return (
        <NavigationRoute {...others} onDismissed={goBack} stackPresentation={stackPresentation} path={path}>
            {stackPresentation === 'modal' ? <StatusBar barStyle='light-content' /> : null}
            {isNavigationBarForModal ? (
                <NavigationBar showBackButton={showNavigationBarButton} {...navBarConfig?.props} goBack={goBack} />
            ) : navBarConfig != null ? (
                <NativeNavigationBar showBackButton={showNavigationBarButton} {...navBarConfig.props} goBack={goBack} />
            ) : null}
            {children}
        </NavigationRoute>
    );
}
