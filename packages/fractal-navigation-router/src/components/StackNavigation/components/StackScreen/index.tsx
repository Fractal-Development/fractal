import React, { ReactElement } from 'react';
import { NavigationBar } from '@bma98/fractal-navigation';
import { NavigationRoute } from '../../../NavigationRoute';
import { useIsRootNavigationBar } from '../../../../hooks/useIsRootNavigationBar';
import { useGoBackAnimated } from '../../../../hooks/useGoBackAnimated';
import { StackScreenWebContainer } from '../StackScreenWebContainer';
import { Route, Routes } from '../../../../router';
import { StackScreenProps } from './types';
import { useFractalRoutesIdentifier } from '../../../../hooks/useFractalRoutesIdentifier';

function StackScreenWebContent({ path = '/', navBarConfig, children }: StackScreenProps): ReactElement {
    const isRootNavigationBar = useIsRootNavigationBar(path);
    const goBack = useGoBackAnimated();

    return (
        <>
            <NavigationBar showBackButton={!isRootNavigationBar} {...navBarConfig?.props} goBack={goBack} />
            {children}
        </>
    );
}

export function StackScreen({ navBarConfig, children, fractalRoutesIdentifier, ...others }: StackScreenProps): ReactElement {
    const genericRoute = useFractalRoutesIdentifier(fractalRoutesIdentifier);
    return (
        <NavigationRoute top={0} left={0} right={0} bottom={0} position='absolute' {...others}>
            <StackScreenWebContainer {...others}>
                <StackScreenWebContent {...others} navBarConfig={navBarConfig} fractalRoutesIdentifier={fractalRoutesIdentifier}>
                    <Routes>
                        <Route path={genericRoute} element={children} />
                    </Routes>
                </StackScreenWebContent>
            </StackScreenWebContainer>
        </NavigationRoute>
    );
}
