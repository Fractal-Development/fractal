import React from 'react';

import { ActivityIndicator, Layer } from '@fractal/fractal-ui';

export const ImageLoading = () => (
    <Layer flex={1} alignItems='center' justifyContent='center'>
        <ActivityIndicator color='#fff' width={25} height={25} />
    </Layer>
);
