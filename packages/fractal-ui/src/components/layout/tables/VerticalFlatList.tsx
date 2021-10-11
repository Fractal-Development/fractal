import React, { ReactElement, useMemo } from 'react';
import { useSizeValue } from '@bma98/size-class';
import { RecyclerViewProps, LayoutProvider } from './RecyclerView';
import { AutoSizeRecyclerView } from './AutoSizeRecyclerView';

export interface VerticalFlatListProps extends Omit<RecyclerViewProps, 'layoutProvider' | 'isHorizontal'> {
    rowHeight: number;
}

export function VerticalFlatList({ rowHeight, ...others }: VerticalFlatListProps): ReactElement {
    const width = useSizeValue('width');

    const layoutProvider = useMemo(() => new LayoutProvider(
            () => 0,
            (_, dim) => {
                dim.height = rowHeight;
                dim.width = width;
                
            }
        ), [width, rowHeight]);

    return <AutoSizeRecyclerView layoutProvider={layoutProvider} {...others} />;
}
