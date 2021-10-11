import React, { ReactElement, useMemo } from 'react';
import { AutoSizeRecyclerView } from './AutoSizeRecyclerView';
import { RecyclerViewProps, LayoutProvider } from './RecyclerView';

export interface HorizontalFlatListProps extends Omit<RecyclerViewProps, 'layoutProvider' | 'isHorizontal'> {
    rowHeight: number;
    rowWidth: number;
}

export function HorizontalFlatList({ rowHeight, rowWidth, ...others }: HorizontalFlatListProps): ReactElement {
    const layoutProvider = useMemo(() => new LayoutProvider(
            () => 0,
            (_, dim) => {
                dim.height = rowHeight;
                dim.width = rowWidth;
                
            }
        ), [rowWidth, rowHeight]);

    return <AutoSizeRecyclerView isHorizontal layoutProvider={layoutProvider} {...others} />;
}
