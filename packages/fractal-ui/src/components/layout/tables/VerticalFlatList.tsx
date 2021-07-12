import React, { ReactElement, useMemo } from 'react';
import { useSizeValue } from '@bma98/size-class';
import { RecyclerView, RecyclerViewProps, LayoutProvider } from './RecyclerView';

export interface VerticalFlatListProps extends Omit<RecyclerViewProps, 'layoutProvider' | 'isHorizontal'> {
    rowHeight: number;
}

export function VerticalFlatList({ rowHeight, ...others }: VerticalFlatListProps): ReactElement {
    const width = useSizeValue('width');

    const layoutProvider = useMemo(() => {
        return new LayoutProvider(
            () => {
                return 0;
            },
            (_, dim) => {
                dim.height = rowHeight;
                dim.width = width;
                return;
            }
        );
    }, [width, rowHeight]);

    return <RecyclerView layoutProvider={layoutProvider} {...others} />;
}
