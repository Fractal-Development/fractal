import React, { ReactElement, useMemo } from 'react';
import { RecyclerView, RecyclerViewProps, LayoutProvider } from './RecyclerView';

export interface HorizontalFlatListProps extends Omit<RecyclerViewProps, 'layoutProvider' | 'isHorizontal'> {
    rowHeight: number;
    rowWidth: number;
}

export function HorizontalFlatList({ rowHeight, rowWidth, ...others }: HorizontalFlatListProps): ReactElement {
    const layoutProvider = useMemo(() => {
        return new LayoutProvider(
            () => {
                return 0;
            },
            (_, dim) => {
                dim.height = rowHeight;
                dim.width = rowWidth;
                return;
            }
        );
    }, [rowWidth, rowHeight]);

    return <RecyclerView isHorizontal layoutProvider={layoutProvider} {...others} />;
}
