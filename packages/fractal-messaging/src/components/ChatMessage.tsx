import React, { useState, useCallback, ReactNode } from 'react';
import { Layer, Popover, useTheme } from '@fractal/fractal-ui';
import { ChatMessageProps, MinimalMessageData } from './types';
import { MessageActions } from './MessageActions';
import { BaseChatMessage } from './BaseChatMessage';

export function ChatMessage<T extends MinimalMessageData>({
    message,
    onFavoritePress,
    onSharePress,
    messageActions,
    getBubbleColor,
    children,
    parsePatterns
}: ChatMessageProps<T>): JSX.Element {
    const { spacings } = useTheme();
    const [popoverVisible, setPopoverVisible] = useState(false);

    const showPopover = useCallback(() => {
        setPopoverVisible(true);
    }, []);

    const hidePopover = useCallback(() => {
        setPopoverVisible(false);
    }, []);

    const handleFavorite = useCallback(
        (message: T) => {
            onFavoritePress?.(message);
            hidePopover();
        },
        [hidePopover, onFavoritePress]
    );

    const handleShare = useCallback(
        (message: T) => {
            onSharePress?.(message);
            hidePopover();
        },
        [hidePopover, onSharePress]
    );

    const renderPopoverChildren = useCallback((): ReactNode => {
        if (messageActions) {
            return messageActions(message);
        }
        return <MessageActions message={message} onFavoritePress={handleFavorite} onSharePress={handleShare} />;
    }, [handleFavorite, handleShare, message, messageActions]);

    return (
        <>
            <Popover
                placement='right'
                active={popoverVisible}
                onRequestClose={hidePopover}
                popoverChildren={renderPopoverChildren}
                modalBackgroundColor='rgba(0, 0, 0, 0.15)'
                usePortal
                display='flex'
            >
                {(ref) => (
                    <BaseChatMessage
                        ref={ref}
                        message={message}
                        getBubbleColor={getBubbleColor}
                        parsePatterns={parsePatterns}
                        onLongPress={showPopover}
                    >
                        {children}
                    </BaseChatMessage>
                )}
            </Popover>
            <Layer marginBottom={spacings.m} />
        </>
    );
}
