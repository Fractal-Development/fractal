import React, { Children, forwardRef } from 'react';

import { Layer } from '../Layer';
import { GridRow } from './GridRow';
import { getGridAccessibilityProps } from './accessibility/getGridAccessibilityProps';
import { GridProps } from './types';

const Grid = forwardRef(({ children, ...others }: GridProps, ref: any): JSX.Element => {
    const isRow = (): boolean => {
        let row = false;
        Children.forEach(children, (child) => {
            if (child && child.type === GridRow) row = true;
        });
        return row;
    };

    return (
        <Layer ref={ref} flex={1} flexDirection={isRow() ? 'column' : 'row'} {...others} {...getGridAccessibilityProps()}>
            {children}
        </Layer>
    );
});

Grid.displayName = 'Grid';

export { Grid };
