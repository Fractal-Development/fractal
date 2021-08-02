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
    getBubbleColor,
    onSend,
    placeholder = 'Escribe aquí...',
    isLoading,
    keyboardAvoidingViewProps,
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
                />
                <AnimatePresence>
                    {isLoading ? (
                        <ChatLoadingIndicator show />
                    ) : (
                        <MessageInput
                            placeholder={placeholder}
                            useForegroundVariant
                            onSend={onSend}
                            from={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0 }}
                        />
                    )}
                </AnimatePresence>
            </PaddingLayer>
        </KeyboardAvoidingView>
    );
}
