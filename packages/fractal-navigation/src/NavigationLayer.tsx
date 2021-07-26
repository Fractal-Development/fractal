import React, { ReactElement } from 'react';
import { useNavigationBarInsets } from './NavigationBar/hooks/useNavigationBarInsets';
import { useTabBarInsets } from './TabBar/hooks/useTabBarInsets';
import { LayerProps, SafeAreaLayer } from '@bma98/fractal-ui';

export function NavigationLayer(props: LayerProps): ReactElement {
    const navigationBarInsets = useNavigationBarInsets();
    const tabBarInsets = useTabBarInsets();

    return (
        <SafeAreaLayer
            {...props}
            paddingTop={navigationBarInsets.top}
            paddingRight={tabBarInsets.right}
            paddingLeft={tabBarInsets.left}
            paddingBottom={tabBarInsets.bottom}
        />
    );
}
