import React, { ReactElement, useMemo } from 'react';
import { LayoutProvider } from 'recyclerlistview';
import { useSizeValue } from '@bma98/size-class';
import { RecyclerView, RecyclerViewProps } from './RecyclerView';

export interface FlatListProps extends Omit<RecyclerViewProps, 'layoutProvider'> {
    rowHeight: number;
}

export function FlatList({ rowHeight, ...others }: FlatListProps): ReactElement {
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
