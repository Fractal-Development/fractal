import React, { useCallback } from 'react';
import { PaddingLayer, useTheme } from '@bma98/fractal-ui';
import { MessageListProps, MinimalMessageData } from './types';
import { ChatMessage } from './ChatMessage';

export function MessageList<T extends MinimalMessageData>({
    messages,
    onFavoritePress,
    onSharePress,
    messageActions,
    ...layerProps
}: MessageListProps<T>): JSX.Element {
    const { colors } = useTheme();

    const renderBubbleMessage = useCallback(
        (message: T) => {
            return (
                <ChatMessage
                    message={message}
                    key={message.id}
                    onFavoritePress={onFavoritePress}
                    onSharePress={onSharePress}
                    messageActions={messageActions}
                />
            );
        },
        [messageActions, onFavoritePress, onSharePress]
    );

    return (
        <PaddingLayer backgroundColor={colors.background} {...layerProps}>
            {messages.map(renderBubbleMessage)}
        </PaddingLayer>
    );
}
