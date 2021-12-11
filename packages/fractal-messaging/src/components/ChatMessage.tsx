import React, { Fragment, useState, useCallback, ReactNode } from 'react';
import { Layer, Popover, useTheme } from '@bma98/fractal-ui';
import { Bubble } from './Bubble';
import { ChatMessageProps, MinimalMessageData } from './types';
import { MessageImage } from './MessageImage';
import { MessageAudio } from './MessageAudio';
import { MessageVideo } from './MessageVideo';
import { MessageText } from './MessageText';
import { MessageActions } from './MessageActions';

export function ChatMessage<T extends MinimalMessageData>({
    message,
    onFavoritePress,
    onSharePress,
    messageActions,
    getBubbleColor,
    children
}: ChatMessageProps<T>): JSX.Element {
    const { colors, spacings } = useTheme();
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
        <Fragment>
            <Popover
                placement={'right'}
                active={popoverVisible}
                onRequestClose={hidePopover}
                popoverChildren={renderPopoverChildren}
                modalBackgroundColor={'rgba(0, 0, 0, 0.15)'}
                usePortal
                display={'flex'}
            >
                {(ref) => (
                    <Bubble
                        ref={ref}
                        arrowPosition={message.senderType == 'bot' ? 'left' : 'right'}
                        color={
                            getBubbleColor
                                ? getBubbleColor(message)
                                : message.senderType == 'bot'
                                ? colors.foreground
                                : colors.mainInteractiveColor
                        }
                        onLongPress={showPopover}
                    >
                        {message.image ? (
                            <MessageImage source={message.image} />
                        ) : message.audio ? (
                            <MessageAudio source={message.audio} />
                        ) : message.video ? (
                            <MessageVideo source={message.video} />
                        ) : (
                            <MessageText text={message.text} color={message.senderType == 'bot' ? colors.text : colors.white} />
                        )}
                        {children?.(message)}
                    </Bubble>
                )}
            </Popover>
            <Layer marginBottom={spacings.m} />
        </Fragment>
    );
}
