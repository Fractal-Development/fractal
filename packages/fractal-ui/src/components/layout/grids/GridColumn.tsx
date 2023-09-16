import React, { forwardRef } from 'react';
import clsx from 'clsx';

import { Layer } from '../Layer';
import { getGridColumnAccessibilityProps } from './accessibility/getGridColumnAccessibilityProps';
import { GridItemProps } from './types';

const GridColumn = forwardRef(
    ({ className = 'flex-1', ...others }: GridItemProps, ref: any): JSX.Element => (
        <Layer ref={ref} className={clsx('flex-col', className)} {...others} {...getGridColumnAccessibilityProps()} />
    )
);

GridColumn.displayName = 'GridColumn';

export { GridColumn };
