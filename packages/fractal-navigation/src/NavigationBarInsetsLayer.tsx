import React, { ReactElement } from 'react';
import { LayerProps, SafeAreaLayer } from '@fractal-software/fractal-ui';
import { useNavigationBarInsets } from './NavigationBar/hooks/useNavigationBarInsets';

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
