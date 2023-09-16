import React, { forwardRef } from 'react';

import { Layer } from './Layer';
import { LayerProps } from './Layer/types';
import clsx from 'clsx';

const Background = forwardRef(({ className, ...others }: LayerProps, ref: any): JSX.Element => {
    return <Layer ref={ref} className={clsx('bg-background-light dark:bg-background-dark', className)} {...others} />;
});

Background.displayName = 'Background';

export { Background };
