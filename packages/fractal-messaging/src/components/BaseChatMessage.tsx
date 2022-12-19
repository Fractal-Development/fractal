import React, { forwardRef } from 'react';
import { useTheme } from '@bma98/fractal-ui';
import { ChatMessageProps, MinimalMessageData } from './types';
import { Bubble } from './Bubble';
import { MessageImage } from './MessageImage';
import { MessageAudio } from './MessageAudio';
import { MessageVideo } from './MessageVideo';
import { MessageText } from './MessageText';

interface BaseChatMessageProps<T extends MinimalMessageData>
    extends Omit<ChatMessageProps<T>, 'onFavoritePress' | 'onSharePress' | 'messageActions'> {
    onLongPress?: () => void;
}

export const BaseChatMessage = forwardRef(
    <T extends MinimalMessageData>(
        { message, getBubbleColor, children, parsePatterns, onLongPress }: BaseChatMessageProps<T>,
        ref: any
    ): JSX.Element => {
        const { colors } = useTheme();

        return (
            <Bubble
                ref={ref}
                arrowPosition={message.senderType === 'bot' ? 'left' : 'right'}
                color={
                    getBubbleColor
                        ? getBubbleColor(message)
                        : message.senderType === 'bot'
                        ? colors.foreground
                        : colors.mainInteractiveColor
                }
                onLongPress={onLongPress}
            >
                {message.image ? (
                    <MessageImage source={message.image} />
                ) : message.audio ? (
                    <MessageAudio messageID={message.id} source={message.audio} />
                ) : message.video ? (
                    <MessageVideo source={message.video} />
                ) : (
                    <MessageText
                        parsePatterns={parsePatterns}
                        text={message.text}
                        color={message.senderType === 'bot' ? colors.text : colors.white}
                    />
                )}
                {children?.(message)}
            </Bubble>
        );
    }
);
