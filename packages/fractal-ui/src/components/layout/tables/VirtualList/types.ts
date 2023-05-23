import { CSSProperties } from 'react';

interface ContentStyle {
    backgroundColor?: string;
    paddingTop?: string | number;
    paddingLeft?: string | number;
    paddingRight?: string | number;
    paddingBottom?: string | number;
    padding?: string | number;
    paddingVertical?: string | number;
    paddingHorizontal?: string | number;
}

export interface ListRenderItemInfo<TItem> {
    item: TItem;
    index: number;
}

export interface VirtualListProps<TItem> {
    data: TItem[];
    renderItem: (info: ListRenderItemInfo<TItem>) => React.ReactElement | null;
    estimatedItemSize: number;
    horizontal?: boolean;
    initialScrollIndex?: number | null;
    keyExtractor?: (item: TItem, index: number) => string;
    customWebContainerStyle?: CSSProperties;
    nativeContentContainerStyle?: ContentStyle;
    /**
     * Enables nested scrolling for Android API level 21+. Nested scrolling is supported by default on iOS.
     */
    nestedScrollEnabled?: boolean;
    /**
     * Only works in native. Reverses the direction of scroll. Uses scale transforms of -1.
     */
    inverted?: boolean | null | undefined;
}
