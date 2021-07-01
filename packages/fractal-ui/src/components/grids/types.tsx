import { ReactElement } from 'react';
import { LayerProps } from '../containers/Layer/types';

interface BaseGridListProps<T> {
    numColumns: number;
    renderItem: (item: T, index: number) => JSX.Element;
    data: Array<T>;
}

export interface GridListProps<T> extends LayerProps, BaseGridListProps<T> {}

export interface GridProps extends Omit<LayerProps, 'children'> {
    children: ReactElement | Array<ReactElement>;
}

export type GridItemProps = Omit<LayerProps, 'flexDirection'>;

export function extractGridItemProps({ flex, height, width }: GridItemProps): string {
    return `${height == null && width == null ? `flex: ${flex || 1}` : ''};`;
}
