import React, { ReactElement } from 'react';
import { useNavigationBarInsets } from './NavigationBar/hooks/useNavigationBarInsets';
import { LayerProps, SafeAreaLayer } from '@bma98/fractal-ui';

export function NavigationBarInsetsLayer(props: LayerProps): ReactElement {
    const navigationBarInsets = useNavigationBarInsets();

    return (
        <SafeAreaLayer
            marginTop={0}
            marginRight={0}
            marginLeft={0}
            marginBottom={0}
            from={false}
            animate={{
                marginTop: navigationBarInsets.top,
                marginRight: navigationBarInsets.right,
                marginLeft: navigationBarInsets.left,
                marginBottom: navigationBarInsets.bottom
            }}
            transition={{ type: 'timing' }}
            flex={1}
            overflow={'hidden'}
            {...props}
        />
    );
}
