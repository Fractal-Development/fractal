import React from 'react';
import { PaddingLayer } from '@bma98/fractal-ui';
import { MessageList } from './MessageList';
import { ChatContentProps, MinimalMessageData } from './types';
import { KeyboardAvoidingView } from './KeyboardAvoidingView';
import { ChatLoadingIndicator } from './ChatLoadingIndicator';

export function ChatContent<T extends MinimalMessageData>({
    messages,
    onFavoritePress,
    onSharePress,
    messageActions,
    getBubbleColor,
    onSend,
    placeholder,
    isLoading,
    keyboardAvoidingViewProps,
    messageInputButtonVariant = 'alternative',
    ...layerProps
}: ChatContentProps<T>): JSX.Element {
    return (
        <KeyboardAvoidingView {...keyboardAvoidingViewProps}>
            <PaddingLayer flex={1} {...layerProps}>
                <MessageList
                    messages={messages}
                    onFavoritePress={onFavoritePress}
                    onSharePress={onSharePress}
                    messageActions={messageActions}
                    getBubbleColor={getBubbleColor}
                    placeholder={placeholder}
                    messageInputButtonVariant={messageInputButtonVariant}
                    onSend={onSend}
                />
                {isLoading && <ChatLoadingIndicator />}
            </PaddingLayer>
        </KeyboardAvoidingView>
    );
}
