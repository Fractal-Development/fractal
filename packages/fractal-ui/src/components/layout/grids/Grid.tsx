import React, { Children, forwardRef } from 'react';
import clsx from 'clsx';

import { Layer } from '../Layer';
import { GridRow } from './GridRow';
import { getGridAccessibilityProps } from './accessibility/getGridAccessibilityProps';
import { GridProps } from './types';

const Grid = forwardRef(({ children, className, ...others }: GridProps, ref: any): JSX.Element => {
    const isRow = (): boolean => {
        let row = false;
        Children.forEach(children, (child) => {
            if (child && child.type === GridRow) row = true;
        });
        return row;
    };

    return (
        <Layer
            ref={ref}
            className={clsx('flex-1', isRow() ? 'flex-column' : 'flex-row', className)}
            {...others}
            {...getGridAccessibilityProps()}
        >
            {children}
        </Layer>
    );
});

Grid.displayName = 'Grid';

export { Grid };
