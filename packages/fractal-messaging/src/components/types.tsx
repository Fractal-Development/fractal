import { ReactNode } from 'react';
import { LayerProps, TouchableOpacityProps } from '@bma98/fractal-ui';

export interface BubbleTriangleProps {
    color: string;
}

export interface BubbleProps extends BubbleTriangleProps, TouchableOpacityProps {
    arrowPosition: 'left' | 'right';
}

export interface MinimalMessageData {
    id: string;
    text?: string;
    image?: string;
    audio?: string;
    video?: string;
    favorite?: boolean;
    senderType: 'user' | 'bot';
}

export interface MessageMediaProps {
    source: number | string;
}

export interface ChatMessageProps<T> {
    message: T;
    onFavoritePress?: (message: T) => void;
    onSharePress?: (message: T) => void;
    messageActions?: (message: T) => ReactNode;
}

export interface MessageListProps<T extends MinimalMessageData> extends Omit<ChatMessageProps<T>, 'message'>, Omit<LayerProps, 'children'> {
    messages: Array<T>;
}
