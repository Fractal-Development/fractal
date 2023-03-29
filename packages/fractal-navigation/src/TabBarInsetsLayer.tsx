import React, { ReactElement } from 'react';
import { LayerProps, SafeAreaLayer } from '@fractal-software/fractal-ui';
import { useTabBarInsets } from './TabBar';

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
