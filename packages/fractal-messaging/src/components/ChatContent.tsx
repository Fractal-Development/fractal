import React, { useState } from 'react';
import { KeyboardAvoidingLayer } from '@fractal/fractal-ui';
import { ImageModalViewer } from '@fractal/fractal-media';
import { MessageList } from './MessageList';
import { ChatContentProps, MinimalMessageData } from './types';
import { ChatLoadingIndicator } from './ChatLoadingIndicator';
import { MessageInput } from './MessageInput';
import { useImagesSource } from '../hooks/useImagesSource';
import { ImageCounter } from './ImageCounter';

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
    customFooter,
    rowRenderer,
    parsePatterns,
    ...layerProps
}: ChatContentProps<T>): JSX.Element {
    const [isVisibleImageViewer, setIsVisibleImageViewer] = useState(false);
    const [images, selectedImageIndex, updateImageIndex] = useImagesSource(messages);

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
    const showImageModalViewer = (message: T) => {
        if (message.image != null) {
            updateImageIndex(message);
            setIsVisibleImageViewer(true);
        }
    };

    const hideImageModalViewer = () => {
        setIsVisibleImageViewer(false);
    };

    return (
        <>
            <MessageList
                {...layerProps}
                messages={messages}
                rowRenderer={rowRenderer}
                parsePatterns={parsePatterns}
                onFavoritePress={onFavoritePress}
                onMessagePress={showImageModalViewer}
                onSharePress={onSharePress}
                messageActions={messageActions}
                getBubbleColor={getBubbleColor}
            />
            {footer}
            <ImageModalViewer
                visible={isVisibleImageViewer}
                images={images}
                imageIndex={selectedImageIndex}
                onRequestClose={hideImageModalViewer}
                footer={({ imageIndex }) => {
                    return <ImageCounter imageIndex={imageIndex} imagesCount={images.length} />;
                }}
            />
        </>
    );
}
