import React, { useCallback, useMemo } from 'react';
import { Layer, useTheme, VirtualList } from '@fractal-software/fractal-ui';
import { ChatMessage } from '../ChatMessage';
import { MessageListProps, MinimalMessageData } from '../types';

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
    const reversedMessages = useMemo(() => {
        return [...messages].reverse();
    }, [messages]);

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
        <Layer flex={1} {...layerProps}>
            {messages.length > 0 && (
                <VirtualList
                    inverted
                    data={reversedMessages}
                    renderItem={renderChatMessage}
                    estimatedItemSize={200}
                    nativeContentContainerStyle={{ paddingBottom: spacings.m }}
                />
            )}
        </Layer>
    );
}
