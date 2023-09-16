import React, { forwardRef } from 'react';
import { clsx } from 'clsx';

import { Layer } from './Layer';
import { LayerProps } from './Layer/types';

const HorizontalLayer = forwardRef(
    ({ className, ...others }: LayerProps, ref: any): JSX.Element => <Layer ref={ref} className={clsx('flex-row', className)} {...others} />
);

HorizontalLayer.displayName = 'HorizontalLayer';

export { HorizontalLayer };
