import React from 'react';
import { Platform, StatusBar } from 'react-native';
import { NativeNavigationBar, NavigationBar } from '@bma98/fractal-navigation';
import { NavigationRoute } from '../../../NavigationRoute';
import { useIsRootNavigationBar } from '../../../../hooks/useIsRootNavigationBar';
import { useGoBackAnimated } from '../../../../hooks/useGoBackAnimated';
import { Route, Routes } from '../../../../router';
import { StackScreenProps } from './types';
import { useFractalRoutesIdentifier } from '../../../../hooks/useFractalRoutesIdentifier';

export function StackScreen({
    children,
    navBarConfig,
    stackPresentation = 'push',
    fractalRoutesIdentifier,
    path,
    ...others
}: StackScreenProps): JSX.Element {
    const genericRoute = useFractalRoutesIdentifier(fractalRoutesIdentifier);
    const goBack = useGoBackAnimated();
    const isRootNavigationBar = useIsRootNavigationBar(path);
    const isNavigationBarForModal =
        stackPresentation === 'modal' && navBarConfig != null && (Platform.OS === 'ios' || Platform.OS === 'android');

    return (
        <NavigationRoute
            top={0}
            left={0}
            right={0}
            bottom={0}
            position='absolute'
            {...others}
            onDismissed={goBack}
            stackPresentation={stackPresentation}
            path={path}
        >
            {stackPresentation === 'modal' ? <StatusBar barStyle='light-content' /> : null}
            {isNavigationBarForModal ? (
                <NavigationBar showBackButton={!isRootNavigationBar} {...navBarConfig?.props} goBack={goBack} />
            ) : navBarConfig != null ? (
                <NativeNavigationBar showBackButton={!isRootNavigationBar} {...navBarConfig.props} goBack={goBack} />
            ) : null}
            <Routes>
                <Route path={genericRoute} element={children} />
            </Routes>
        </NavigationRoute>
    );
}
