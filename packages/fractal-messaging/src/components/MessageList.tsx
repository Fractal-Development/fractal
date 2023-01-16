import React, { useCallback, useEffect, useRef } from 'react';
import { Layer, VirtualList } from '@bma98/fractal-ui';
import { useGetContainerWidth } from '../hooks/useGetContainerWidth';
import { ChatMessage } from './ChatMessage';
import { MessageListProps, MinimalMessageData } from './types';

export function MessageList<T extends MinimalMessageData>({
    messages,
    onFavoritePress,
    onSharePress,
    messageActions,
    getBubbleColor,
    rowRenderer,
    parsePatterns,
    ...layerProps
}: MessageListProps<T>): JSX.Element {
    const listView = useRef<VirtualList<T>>(null);
    const containerRef = useRef<any>();
    const messagesLength = useRef<number>(0);
    const [containerWidth, containerLayoutProps] = useGetContainerWidth(containerRef);

    useEffect(() => {
        if (messagesLength.current !== messages.length) {
            const timeout = setTimeout(() => {
                listView.current?.scrollToEnd();
                messagesLength.current = messages.length;
                clearTimeout(timeout);
            }, 500);
        }
    }, [messages.length]);

    const renderChatMessage = useCallback(
        ({ item, index }) => {
            if (rowRenderer != null) {
                return rowRenderer({
                    message: item,
                    index,
                    onFavoritePress,
                    onSharePress,
                    messageActions,
                    getBubbleColor,
                    parsePatterns,
                    containerWidth
                });
            }
            return (
                <ChatMessage
                    message={item}
                    key={item.id}
                    onFavoritePress={onFavoritePress}
                    onSharePress={onSharePress}
                    messageActions={messageActions}
                    getBubbleColor={getBubbleColor}
                    parsePatterns={parsePatterns}
                    containerWidth={containerWidth}
                />
            );
        },
        [containerWidth, getBubbleColor, messageActions, onFavoritePress, onSharePress, parsePatterns, rowRenderer]
    );

    return (
        <Layer flex={1} ref={containerRef} {...containerLayoutProps} {...layerProps}>
            {messages.length > 0 && (
                <VirtualList
                    ref={listView}
                    data={messages}
                    renderItem={renderChatMessage}
                    estimatedItemSize={200}
                    initialScrollIndex={messages.length - 1}
                />
            )}
        </Layer>
    );
}
