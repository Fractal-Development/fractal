import React, { forwardRef, useCallback } from 'react';

import { Layer } from '../Layer';
import { getGridListAccessibilityProps } from './accessibility/getGridListAccessibilityProps';
import { GridListProps } from './types';

function Grid<T>(props: GridListProps<T>, ref: any): JSX.Element {
    const { numColumns, renderItem, data } = props;

    const renderWrapper = useCallback(
        (item: T, index: number): JSX.Element => (
            <Layer key={`${index}`} width={`${100 / numColumns}%`}>
                {renderItem(item, index)}
            </Layer>
        ),
        [numColumns, renderItem]
    );

    return (
        <Layer ref={ref} flexWrap='wrap' flexDirection='row' {...props} {...getGridListAccessibilityProps()}>
            {data.map(renderWrapper)}
        </Layer>
    );
}

const GridList = forwardRef(Grid);

GridList.displayName = 'GridList';

export { GridList };
