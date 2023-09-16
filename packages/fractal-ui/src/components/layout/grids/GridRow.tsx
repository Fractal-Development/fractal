import React, { forwardRef } from 'react';
import clsx from 'clsx';

import { Layer } from '../Layer';
import { getGridRowAccessibilityProps } from './accessibility/getGridRowAccessibilityProps';
import { GridItemProps } from './types';

const GridRow = forwardRef(
    ({ className, ...others }: GridItemProps, ref: any): JSX.Element => (
        <Layer ref={ref} className={clsx('flex-row', className)} {...others} {...getGridRowAccessibilityProps()} />
    )
);

GridRow.displayName = 'GridRow';

export { GridRow };
