import React, { useCallback, useEffect, useRef } from 'react';
import { Layer, useTheme, VirtualList } from '@fractal/fractal-ui';
import { ChatMessage } from './ChatMessage';
import { MessageListProps, MinimalMessageData } from './types';

export function MessageList<T extends MinimalMessageData>({
    messages,
    onFavoritePress,
    onMessagePress,
    onSharePress,
    messageActions,
    getBubbleColor,
    rowRenderer,
    parsePatterns,
    ...layerProps
}: MessageListProps<T>): JSX.Element {
    const { spacings } = useTheme();
    const listView = useRef<VirtualList<T>>(null);
    const containerRef = useRef<any>();
    const messagesLength = useRef<number>(0);

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
                    onMessagePress,
                    onSharePress,
                    messageActions,
                    getBubbleColor,
                    parsePatterns
                });
            }
            return (
                <ChatMessage
                    message={item}
                    key={item.id}
                    onFavoritePress={onFavoritePress}
                    onMessagePress={onMessagePress}
                    onSharePress={onSharePress}
                    messageActions={messageActions}
                    getBubbleColor={getBubbleColor}
                    parsePatterns={parsePatterns}
                />
            );
        },
        [getBubbleColor, messageActions, onFavoritePress, onMessagePress, onSharePress, parsePatterns, rowRenderer]
    );

    return (
        <Layer flex={1} ref={containerRef} {...layerProps}>
            {messages.length > 0 && (
                <VirtualList
                    ref={listView}
                    data={messages}
                    renderItem={renderChatMessage}
                    estimatedItemSize={200}
                    initialScrollIndex={messages.length - 1}
                    nativeContentContainerStyle={{ paddingTop: spacings.m }}
                    customWebContainerStyle={{ paddingTop: spacings.m }}
                />
            )}
        </Layer>
    );
}
