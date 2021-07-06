import React, { forwardRef } from 'react';
import { Layer } from '../Layer';
import { LayerProps } from '../Layer/types';

const SafeAreaLayer = forwardRef((props: LayerProps, ref: any): JSX.Element => {
    return <Layer ref={ref} {...props} />;
});

SafeAreaLayer.displayName = 'SafeAreaLayer';

export { SafeAreaLayer };
