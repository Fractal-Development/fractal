import { ReactElement } from 'react';

import { LayerProps } from '../Layer/types';

interface BaseGridListProps<T> {
    numColumns: number;
    renderItem: (item: T, index: number) => JSX.Element;
    data: T[];
}

export interface GridListProps<T> extends LayerProps, BaseGridListProps<T> {}

export interface GridProps extends Omit<LayerProps, 'children'> {
    children: ReactElement | ReactElement[];
}

export type GridItemProps = Omit<LayerProps, 'flexDirection'>;
