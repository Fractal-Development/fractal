import React, { ReactElement } from 'react';
import AutoSizer from 'react-virtualized-auto-sizer';
import { RecyclerView, RecyclerViewProps } from '../RecyclerView';

export function AutoSizeRecyclerView({ style, ...others }: RecyclerViewProps): ReactElement {
    return <AutoSizer>{({ height, width }) => <RecyclerView canChangeSize style={{ height, width, ...style }} {...others} />}</AutoSizer>;
}
