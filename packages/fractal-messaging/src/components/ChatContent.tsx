import React, { useState } from 'react';
import { KeyboardAvoidingLayer } from '@fractal-software/fractal-ui';
import { ModalAutoPlayer, ImageModalViewer } from '@fractal-software/fractal-media';
import { MessageList } from './MessageList';
import { ChatContentProps, MinimalMessageData } from './types';
import { ChatLoadingIndicator } from './ChatLoadingIndicator';
import { MessageInput } from './MessageInput';
import { useImagesSource } from '../hooks/useImagesSource';
import { ImageCounter } from './ImageCounter';
import { ChatFooterContainer } from './ChatFooterContainer';

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
    const [selectedVideoSource, setSelectedVideoSource] = useState<string | number>('');
    const [isVisibleModalVideoPlayer, setIsVisibleModalVideoPlayer] = useState(false);

    const footer =
        customFooter != null ? (
            customFooter
        ) : (
            <ChatFooterContainer>
                {isLoading ? (
                    <ChatLoadingIndicator />
                ) : (
                    <MessageInput
                        useForegroundVariant
                        placeholder={placeholder}
                        onSend={onSend}
                        buttonVariant={messageInputButtonVariant}
                    />
                )}
            </ChatFooterContainer>
        );
    const showImageModalViewer = (message: T) => {
        if (message.image != null) {
            updateImageIndex(message);
            setIsVisibleImageViewer(true);
        }
        if (message.video != null) {
            setSelectedVideoSource(message.video);
            setIsVisibleModalVideoPlayer(true);
        }
    };

    const hideImageModalViewer = () => {
        setIsVisibleImageViewer(false);
    };

    const hideModalVideoPlayer = () => {
        setIsVisibleModalVideoPlayer(false);
    };

    return (
        <KeyboardAvoidingLayer flex={1} keyboardVerticalOffset={100} {...keyboardAvoidingViewProps}>
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
            <ModalAutoPlayer visible={isVisibleModalVideoPlayer} source={selectedVideoSource} onRequestClose={hideModalVideoPlayer} />
        </KeyboardAvoidingLayer>
    );
}
