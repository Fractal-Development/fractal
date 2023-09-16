import React, { forwardRef } from 'react';
import clsx from 'clsx';
import { Layer } from './Layer';
import { LayerProps } from './Layer/types';

const PaddingLayer = forwardRef(({ className, ...others }: LayerProps, ref: any): JSX.Element => {
    return <Layer ref={ref} className={clsx('p-4', className)} {...others} />;
});

PaddingLayer.displayName = 'PaddingLayer';

export { PaddingLayer };
