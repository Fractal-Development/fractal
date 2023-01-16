import React, { PureComponent } from 'react';
import { Range, Virtualizer } from '@tanstack/react-virtual';
import { VirtualListProps } from './types';
import { VirtualizerWrapper } from './VirtualizerWrapper';

export class VirtualList<TItem> extends PureComponent<VirtualListProps<TItem>> {
    private virtualizer: Virtualizer<HTMLDivElement, Element> | null = null;
    private rangeRef: Range | null = null;

    private scrollToIndex = (index: number) => {
        this.virtualizer?.scrollToIndex(index, { align: 'end' });
        const timeout = setTimeout(() => {
            if (this.rangeRef !== null) {
                const { startIndex, endIndex } = this.rangeRef;
                const isVisible = index >= startIndex && index <= endIndex;

                if (!isVisible) {
                    this.scrollToIndex(index);
                } else {
                    clearTimeout(timeout);
                }
            }
        }, 300);
    };

    componentDidMount() {
        if (this.props.initialScrollIndex != null) {
            this.scrollToIndex(this.props.initialScrollIndex);
        }
    }

    public scrollToEnd() {
        const lastIndex = this.props.data.length - 1;
        this.scrollToIndex(lastIndex);
    }

    render() {
        const { data, renderItem, estimatedItemSize, horizontal, keyExtractor, customWebContainerStyle } = this.props;

        return (
            <VirtualizerWrapper
                data={data}
                estimatedItemSize={estimatedItemSize}
                horizontal={horizontal}
                keyExtractor={keyExtractor}
                rangeExtractor={(range: Range) => {
                    this.rangeRef = range;
                }}
                customWebContainerStyle={customWebContainerStyle}
            >
                {(virtualizer: Virtualizer<HTMLDivElement, Element>) => {
                    this.virtualizer = virtualizer;
                    return (
                        <div
                            style={{
                                height: horizontal ? '100%' : virtualizer.getTotalSize(),
                                width: horizontal ? virtualizer.getTotalSize() : '100%',
                                position: 'relative'
                            }}
                        >
                            {virtualizer.getVirtualItems().map((virtualRow) => {
                                return (
                                    <div
                                        key={virtualRow.key}
                                        data-index={virtualRow.index}
                                        ref={virtualizer.measureElement}
                                        style={{
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            transform: horizontal
                                                ? `translateX(${virtualRow.start}px)`
                                                : `translateY(${virtualRow.start}px)`,
                                            ...(horizontal ? { height: '100%' } : { width: '100%' })
                                        }}
                                    >
                                        {renderItem({ item: data[virtualRow.index], index: virtualRow.index })}
                                    </div>
                                );
                            })}
                        </div>
                    );
                }}
            </VirtualizerWrapper>
        );
    }
}
