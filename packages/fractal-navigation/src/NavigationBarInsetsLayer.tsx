import React, { ReactElement } from 'react';
import { useNavigationBarInsets } from './NavigationBar/hooks/useNavigationBarInsets';
import { LayerProps, SafeAreaLayer } from '@bma98/fractal-ui';

export function NavigationBarInsetsLayer(props: LayerProps): ReactElement {
    const navigationBarInsets = useNavigationBarInsets();

    return (
        <SafeAreaLayer
            marginTop={navigationBarInsets.top}
            marginRight={navigationBarInsets.right}
            marginLeft={navigationBarInsets.left}
            marginBottom={navigationBarInsets.bottom}
            flex={1}
            position='relative'
            {...props}
        />
    );
}
