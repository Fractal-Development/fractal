import React, { forwardRef } from 'react';

import { Layer } from '../Layer';
import { LayerProps } from '../Layer/types';

const SafeAreaLayer = forwardRef(
    ({ style, ...others }: LayerProps, ref: any): JSX.Element => (
        <Layer
            ref={ref}
            style={{
                paddingTop: 'env(safe-area-inset-top)',
                paddingLeft: 'env(safe-area-inset-left)',
                paddingBottom: 'env(safe-area-inset-bottom)',
                paddingRight: 'env(safe-area-inset-right)',
                ...style
            }}
            {...others}
        />
    )
);

SafeAreaLayer.displayName = 'SafeAreaLayer';

export { SafeAreaLayer };
