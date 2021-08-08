import React, { ReactElement } from 'react';
import { useNavigationBarInsets } from './NavigationBar/hooks/useNavigationBarInsets';
import { useTabBarInsets } from './TabBar';
import { LayerProps, SafeAreaLayer } from '@bma98/fractal-ui';

const initialMargins = {
    marginTop: 0,
    marginRight: 0,
    marginLeft: 0,
    marginBottom: 0
};

export function NavigationLayer(props: LayerProps): ReactElement {
    const navigationBarInsets = useNavigationBarInsets();
    const tabBarInsets = useTabBarInsets();

    return (
        <SafeAreaLayer
            from={initialMargins}
            animate={{
                marginTop: navigationBarInsets.top,
                marginRight: tabBarInsets.right,
                marginLeft: tabBarInsets.left,
                marginBottom: tabBarInsets.bottom
            }}
            flex={1}
            {...props}
        />
    );
}
