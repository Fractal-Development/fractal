import React from 'react';
import { Layer, ActivityIndicator } from '@bma98/fractal-ui';

export function Loader(): JSX.Element {
    return (
        <Layer position={'absolute'} flex={1} right={0} left={0} top={0} bottom={0} alignItems={'center'} justifyContent={'center'}>
            <ActivityIndicator color='white' width={25} height={25} />
        </Layer>
    );
}
