import React, { useCallback, useRef, ReactElement, CSSProperties } from 'react';
import { useVirtualizer, Range, defaultRangeExtractor, Virtualizer } from '@tanstack/react-virtual';

interface VirtualizerWrapperProps<TItem> {
    data: TItem[];
    estimatedItemSize: number;
    children: (virtualizer: Virtualizer<HTMLDivElement, Element>) => ReactElement;
    horizontal?: boolean;
    keyExtractor?: (item: TItem, index: number) => string;
    rangeExtractor?: (range: Range) => void;
    customWebContainerStyle?: CSSProperties;
}

export function VirtualizerWrapper<TItem>({
    data,
    estimatedItemSize,
    horizontal,
    keyExtractor,
    rangeExtractor,
    children,
    customWebContainerStyle
}: VirtualizerWrapperProps<TItem>) {
    const parentRef = useRef<HTMLDivElement>(null);
    const virtualizer = useVirtualizer({
        count: data.length,
        getScrollElement: () => parentRef.current,
        estimateSize: () => estimatedItemSize,
        horizontal,
        getItemKey: keyExtractor
            ? (index) => {
                  return keyExtractor(data[index], index);
              }
            : undefined,
        rangeExtractor: useCallback(
            (range: Range) => {
                rangeExtractor?.(range);
                return defaultRangeExtractor(range);
            },
            [rangeExtractor]
        )
    });

    return (
        <div
            ref={parentRef}
            style={
                customWebContainerStyle
                    ? { overflow: 'auto', ...customWebContainerStyle }
                    : {
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          display: 'flex',
                          flex: '1 1 0%',
                          overflow: 'auto',
                          position: 'absolute'
                      }
            }
        >
            {children(virtualizer)}
        </div>
    );
}
