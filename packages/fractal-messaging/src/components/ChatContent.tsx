import React from 'react';
import { MessageList } from './MessageList';
import { ChatContentProps, MinimalMessageData } from './types';
import { KeyboardAvoidingView } from './KeyboardAvoidingView';
import { ChatLoadingIndicator } from './ChatLoadingIndicator';
import { MessageInput } from './MessageInput';

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
        customFooter ?? isLoading ? (
            <ChatLoadingIndicator />
        ) : (
            <MessageInput useForegroundVariant placeholder={placeholder} onSend={onSend} buttonVariant={messageInputButtonVariant} />
        );

    return (
        <KeyboardAvoidingView {...keyboardAvoidingViewProps}>
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
        </KeyboardAvoidingView>
    );
}
