import React from 'react';
import { PaddingLayer } from '@bma98/fractal-ui';
import { MessageList } from './MessageList';
import { ChatContentProps, MinimalMessageData } from './types';
import { KeyboardAvoidingView } from './KeyboardAvoidingView';
import { ChatLoadingIndicator } from './ChatLoadingIndicator';
import { MessageInput } from '.';

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
            <MessageInput placeholder={placeholder} onSend={onSend} buttonVariant={messageInputButtonVariant} />
        );

    return (
        <KeyboardAvoidingView {...keyboardAvoidingViewProps}>
            <PaddingLayer flex={1} {...layerProps}>
                <MessageList
                    messages={messages}
                    onFavoritePress={onFavoritePress}
                    onSharePress={onSharePress}
                    messageActions={messageActions}
                    getBubbleColor={getBubbleColor}
                    footerComponent={enableFluidFooter ? footer : undefined}
                />
                {!enableFluidFooter && footer}
            </PaddingLayer>
        </KeyboardAvoidingView>
    );
}
