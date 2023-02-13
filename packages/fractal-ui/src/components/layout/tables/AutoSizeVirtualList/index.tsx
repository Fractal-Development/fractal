import React, { ReactElement, forwardRef } from 'react';
import AutoSizer from 'react-virtualized-auto-sizer';
import { VirtualList } from '../VirtualList';
import { VirtualListProps } from '../VirtualList/types';

const AutoSizeVirtualListRender = <TItem extends unknown>(
    { customWebContainerStyle, ...others }: VirtualListProps<TItem>,
    ref?: any
): ReactElement => {
    return (
        <AutoSizer>
            {({ height, width }) => (
                <VirtualList ref={ref} customWebContainerStyle={{ height, width, ...customWebContainerStyle }} {...others} />
            )}
        </AutoSizer>
    );
};

const AutoSizeVirtualList = forwardRef(AutoSizeVirtualListRender);

AutoSizeVirtualList.displayName = 'AutoSizeVirtualList';

export { AutoSizeVirtualList };
