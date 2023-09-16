import React, { forwardRef, useCallback } from 'react';

import { Layer } from '../Layer';
import { getGridListAccessibilityProps } from './accessibility/getGridListAccessibilityProps';
import { GridListProps } from './types';
import clsx from 'clsx';

function Grid<T>({ className, ...others }: GridListProps<T>, ref: any): JSX.Element {
    const { numColumns, renderItem, data } = others;

    const renderWrapper = useCallback(
        (item: T, index: number): JSX.Element => (
            <Layer key={`${index}`} className={`w-[${100 / numColumns}%]`}>
                {renderItem(item, index)}
            </Layer>
        ),
        [numColumns, renderItem]
    );

    return (
        <Layer ref={ref} className={clsx('flex-row flex-wrap', className)} {...others} {...getGridListAccessibilityProps()}>
            {data.map(renderWrapper)}
        </Layer>
    );
}

const GridList = forwardRef(Grid);

GridList.displayName = 'GridList';

export { GridList };
