import { ReactElement } from 'react';
import { RecyclerViewProps } from './RecyclerView';
export interface FlatListProps extends Omit<RecyclerViewProps, 'layoutProvider'> {
    rowHeight: number;
}
export declare function FlatList({ rowHeight, ...others }: FlatListProps): ReactElement;
