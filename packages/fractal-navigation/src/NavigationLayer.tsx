import React, { ReactElement } from 'react';
import { useNavigationBarInsets } from './NavigationBar/hooks/useNavigationBarInsets';
import { useTabBarInsets } from './TabBar/hooks/useTabBarInsets';
import { LayerProps, SafeAreaLayer } from '@bma98/fractal-ui';

export function NavigationLayer(props: LayerProps): ReactElement {
    const navigationBarInsets = useNavigationBarInsets();
    const tabBarInsets = useTabBarInsets();

    return (
        <SafeAreaLayer
            marginTop={navigationBarInsets.top}
            marginRight={tabBarInsets.right}
            marginLeft={tabBarInsets.left}
            marginBottom={tabBarInsets.bottom}
            flex={1}
            {...props}
        />
    );
}
