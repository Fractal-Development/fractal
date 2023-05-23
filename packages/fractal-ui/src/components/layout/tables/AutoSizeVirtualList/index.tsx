import React, { ReactElement, Ref, forwardRef } from 'react';
import AutoSizer from 'react-virtualized-auto-sizer';
import { VirtualList } from '../VirtualList';
import { VirtualListProps } from '../VirtualList/types';

const AutoSizeVirtualListRender = (
    { customWebContainerStyle, ...others }: VirtualListProps<any>,
    ref?: Ref<VirtualList<any>>
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
