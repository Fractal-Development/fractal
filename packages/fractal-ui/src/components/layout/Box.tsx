import React, { forwardRef } from 'react';
import clsx from 'clsx';

import { LayerProps } from './Layer/types';
import { PaddingLayer } from './PaddingLayer';

const Box = forwardRef(({ className, ...others }: LayerProps, ref: any): JSX.Element => {
    return (
        <PaddingLayer ref={ref} className={clsx('bg-foreground-light dark:bg-foreground-dark rounded-xl shadow', className)} {...others} />
    );
});

Box.displayName = 'Box';

export { Box };
