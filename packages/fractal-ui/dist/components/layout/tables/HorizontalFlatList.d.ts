import { ReactElement } from 'react';
import { RecyclerViewProps } from './RecyclerView';
export interface HorizontalFlatListProps extends Omit<RecyclerViewProps, 'layoutProvider' | 'isHorizontal'> {
    rowHeight: number;
    rowWidth: number;
}
export declare function HorizontalFlatList({ rowHeight, rowWidth, ...others }: HorizontalFlatListProps): ReactElement;
