import React from 'react';
import { MessageList } from './MessageList';
import { ChatContentProps, MinimalMessageData } from './types';
import { ChatLoadingIndicator } from './ChatLoadingIndicator';
import { MessageInput } from './MessageInput';
import { KeyboardAvoidingLayer } from '@bma98/fractal-ui';

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
    enableFluidFooter,
    customFooter,
    ...layerProps
}: ChatContentProps<T>): JSX.Element {
    const footer =
        customFooter != null ? (
            customFooter
        ) : isLoading ? (
            <ChatLoadingIndicator />
        ) : (
            <KeyboardAvoidingLayer keyboardVerticalOffset={100} {...keyboardAvoidingViewProps}>
                <MessageInput useForegroundVariant placeholder={placeholder} onSend={onSend} buttonVariant={messageInputButtonVariant} />
            </KeyboardAvoidingLayer>
        );

    return (
        <>
            <MessageList
                {...layerProps}
                messages={messages}
                onFavoritePress={onFavoritePress}
                onSharePress={onSharePress}
                messageActions={messageActions}
                getBubbleColor={getBubbleColor}
                footerComponent={enableFluidFooter ? footer : undefined}
            />
            {!enableFluidFooter ? footer : undefined}
        </>
    );
}
