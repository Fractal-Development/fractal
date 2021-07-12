import React, { forwardRef } from 'react';
import { Layer } from './Layer';
import { LayerProps } from './Layer/types';

const HorizontalLayer = forwardRef((props: LayerProps, ref: any): JSX.Element => {
    return <Layer ref={ref} flexDirection={'row'} {...props} />;
});

HorizontalLayer.displayName = 'HorizontalLayer';

export { HorizontalLayer };
