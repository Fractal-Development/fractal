import React, { ReactElement } from 'react';
import { NavigationBar } from '@bma98/fractal-navigation';
import { NavigationRouteProps } from '../../../NavigationRoute/types/NavigationRouteProps';
import { NavigationRoute } from '../../../NavigationRoute';
import { useIsRootNavigationBar } from './hooks/useIsRootNavigationBar';
import { useGoBackAnimated } from '../../hooks/useGoBackAnimated';
import { StackScreenWebContainer } from '../StackScreenWebContainer';

interface StackScreenProps extends NavigationRouteProps {
    navBarConfig?: ReactElement;
}

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

export function StackScreen({ navBarConfig, children, ...others }: StackScreenProps): ReactElement {
    return (
        <NavigationRoute top={0} left={0} right={0} bottom={0} position='absolute' {...others}>
            <StackScreenWebContainer {...others}>
                <StackScreenWebContent {...others} navBarConfig={navBarConfig}>
                    {children}
                </StackScreenWebContent>
            </StackScreenWebContainer>
        </NavigationRoute>
    );
}
