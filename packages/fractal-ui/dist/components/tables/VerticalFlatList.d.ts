import { ReactElement } from 'react';
import { RecyclerViewProps } from './RecyclerView';
export interface VerticalFlatListProps extends Omit<RecyclerViewProps, 'layoutProvider' | 'isHorizontal'> {
    rowHeight: number;
}
export declare function VerticalFlatList({ rowHeight, ...others }: VerticalFlatListProps): ReactElement;
