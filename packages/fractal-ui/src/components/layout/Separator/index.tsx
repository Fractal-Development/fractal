import React, { forwardRef } from 'react';
import clsx from 'clsx';

import { Layer } from '../Layer';
import { LayerProps } from '../Layer/types';
import { getSeparatorAccessibilityProps } from './accessibility/getSeparatorAccessibilityProps';

export interface SeparatorProps extends Omit<LayerProps, 'children'> {
    isAtBackgroundLevel?: boolean;
}

const Separator = forwardRef(({ isAtBackgroundLevel, className, ...others }: SeparatorProps, ref: any): JSX.Element => {
    return (
        <Layer
            ref={ref}
            className={clsx(
                'h-1 w-full',
                isAtBackgroundLevel ? 'bg-placeholder-light dark:bg-placeholder-dark' : 'bg-background-light dark:bg-background-dark',
                className
            )}
            {...others}
            {...getSeparatorAccessibilityProps()}
        />
    );
});

Separator.displayName = 'Separator';

export { Separator };
