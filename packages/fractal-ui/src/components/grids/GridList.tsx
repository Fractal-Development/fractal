import React, { forwardRef, useCallback } from 'react';
import { Layer } from '../containers/Layer';
import { GridListProps } from './types';
import { getGridListAccessibilityProps } from './accessibility/getGridListAccessibilityProps';

const GridList = forwardRef(function List<T>(props: GridListProps<T>, ref: any): JSX.Element {
    const { numColumns, renderItem, data } = props;

    const renderWrapper = useCallback(
        (item: T, index: number): JSX.Element => {
            return (
                <Layer key={`${index}`} width={`${100 / numColumns}%`}>
                    {renderItem(item, index)}
                </Layer>
            );
        },
        [numColumns, renderItem]
    );

    return (
        <Layer ref={ref} flexWrap={'wrap'} flexDirection={'row'} {...props} {...getGridListAccessibilityProps()}>
            {data.map(renderWrapper)}
        </Layer>
    );
});

GridList.displayName = 'GridList';

export { GridList };
