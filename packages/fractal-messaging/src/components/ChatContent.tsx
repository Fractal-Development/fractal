import React from 'react';
import { PaddingLayer, AnimatePresence } from '@bma98/fractal-ui';
import { MessageInput } from './MessageInput';
import { MessageList } from './MessageList';
import { ChatContentProps, MinimalMessageData } from './types';
import { KeyboardAvoidingView } from './KeyboardAvoidingView';
import { ChatLoadingIndicator } from './ChatLoadingIndicator';

export function ChatContent<T extends MinimalMessageData>({
    messages,
    onFavoritePress,
    onSharePress,
    messageActions,
    onSend,
    placeholder = 'Escribe aquí...',
    isLoading,
    ...layerProps
}: ChatContentProps<T>): JSX.Element {
    return (
        <KeyboardAvoidingView>
            <PaddingLayer flex={1} {...layerProps}>
                <MessageList
                    messages={messages}
                    onFavoritePress={onFavoritePress}
                    onSharePress={onSharePress}
                    messageActions={messageActions}
                />
                <AnimatePresence>
                    {isLoading ? (
                        <ChatLoadingIndicator show />
                    ) : (
                        <MessageInput
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0 }}
                            placeholder={placeholder}
                            useForegroundVariant
                            onSend={onSend}
                        />
                    )}
                </AnimatePresence>
            </PaddingLayer>
        </KeyboardAvoidingView>
    );
}
