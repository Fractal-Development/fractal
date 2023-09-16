import React, { forwardRef } from 'react';

import { Layer } from './Layer';
import { LayerProps } from './Layer/types';
import { clsx } from 'clsx';

const MarginLayer = forwardRef(({ className, ...others }: LayerProps, ref: any): JSX.Element => {
    return <Layer ref={ref} className={clsx('m-4', className)} {...others} />;
});

MarginLayer.displayName = 'MarginLayer';

export { MarginLayer };
