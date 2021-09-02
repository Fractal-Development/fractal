import React, { ReactElement } from 'react';
import { useTabBarInsets } from './TabBar';
import { LayerProps, SafeAreaLayer } from '@bma98/fractal-ui';

export function TabBarInsetsLayer(props: LayerProps): ReactElement {
    const tabBarInsets = useTabBarInsets();

    return (
        <SafeAreaLayer
            marginTop={tabBarInsets.top}
            marginRight={tabBarInsets.right}
            marginLeft={tabBarInsets.left}
            marginBottom={tabBarInsets.bottom}
            flex={1}
            position='relative'
            {...props}
        />
    );
}
