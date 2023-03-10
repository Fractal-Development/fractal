import React, { forwardRef } from 'react';
import { useTheme } from '@fractal/fractal-ui';
import { ChatMessageProps, MinimalMessageData } from './types';
import { Bubble } from './Bubble';
import { MessageImage } from './MessageImage';
import { MessageAudio } from './MessageAudio';
import { MessageVideo } from './MessageVideo';
import { MessageText } from './MessageText';

interface BaseChatMessageProps<T extends MinimalMessageData>
    extends Omit<ChatMessageProps<T>, 'onFavoritePress' | 'onSharePress' | 'messageActions' | 'onMessagePress'> {
    onLongPress?: () => void;
    onPress?: () => void;
}

export const BaseChatMessage = forwardRef(
    <T extends MinimalMessageData>(
        { message, getBubbleColor, children, parsePatterns, onLongPress, onPress }: BaseChatMessageProps<T>,
        ref: any
    ): JSX.Element => {
        const { colors, spacings } = useTheme();

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
                onPress={onPress}
                marginLeft={spacings.m}
                marginRight={spacings.m}
            >
                {message.image ? (
                    <MessageImage source={message.image} />
                ) : message.audio ? (
                    <MessageAudio messageID={message.id} source={message.audio} />
                ) : message.video ? (
                    <MessageVideo source={message.video} onPlayPress={onPress} />
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
