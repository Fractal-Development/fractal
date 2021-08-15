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
            // from={false}
            // animate={{
            //     marginTop: tabBarInsets.top,
            //     marginRight: tabBarInsets.right,
            //     marginLeft: tabBarInsets.left,
            //     marginBottom: tabBarInsets.bottom
            // }}
            // transition={{ type: 'timing' }}
            flex={1}
            position='relative'
            overflow={'hidden'}
            {...props}
        />
    );
}
