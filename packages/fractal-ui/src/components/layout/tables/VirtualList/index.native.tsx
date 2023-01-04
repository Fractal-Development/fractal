import React from 'react';
import { FlashList } from '@shopify/flash-list';
import { VirtualListProps } from './types';

export class VirtualList<TItem> extends React.PureComponent<VirtualListProps<TItem>> {
    private listRef?: FlashList<TItem>;

    private flashListRef = (ref: any) => {
        this.listRef = ref;
    };

    public scrollToEnd() {
        this.listRef?.scrollToEnd({ animated: true });
    }

    render() {
        const { data, renderItem, estimatedItemSize, horizontal, initialScrollIndex, keyExtractor, nativeContentContainerStyle } =
            this.props;

        return (
            <FlashList
                ref={this.flashListRef}
                data={data}
                renderItem={renderItem}
                estimatedItemSize={estimatedItemSize}
                horizontal={horizontal}
                initialScrollIndex={initialScrollIndex}
                keyExtractor={keyExtractor}
                contentContainerStyle={nativeContentContainerStyle}
            />
        );
    }
}
