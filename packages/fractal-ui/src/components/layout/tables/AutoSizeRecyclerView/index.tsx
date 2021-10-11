import React, { ReactElement, forwardRef } from 'react';
import AutoSizer from 'react-virtualized-auto-sizer';
import { RecyclerView, RecyclerViewProps } from '../RecyclerView';

const AutoSizeRecyclerView = forwardRef(({ style, ...others }: RecyclerViewProps, ref?: any): ReactElement => (
        <AutoSizer>
            {({ height, width }) => <RecyclerView ref={ref} canChangeSize style={{ height, width, ...style }} {...others} />}
        </AutoSizer>
    ));

AutoSizeRecyclerView.displayName = 'AutoSizeRecyclerView';

export { AutoSizeRecyclerView };
