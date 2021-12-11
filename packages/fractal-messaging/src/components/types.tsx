import { ReactElement, ReactNode } from 'react';
import { ButtonVariant, KeyboardAvoidingLayerProps, LayerProps, TouchableOpacityProps } from '@bma98/fractal-ui';

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
    getBubbleColor?: (message: T) => string;
    children?: (message: T) => ReactNode;
}

export interface ChatContentProps<T extends MinimalMessageData> extends MessageListProps<T> {
    onSend: (message: string) => void;
    placeholder?: string;
    isLoading?: boolean;
    keyboardAvoidingViewProps?: KeyboardAvoidingLayerProps;
    messageInputButtonVariant?: ButtonVariant;
    enableFluidFooter?: boolean;
    customFooter?: ReactElement | Array<ReactElement>;
}

export interface MessageListProps<T extends MinimalMessageData> extends Omit<ChatMessageProps<T>, 'message'>, Omit<LayerProps, 'children'> {
    messages: Array<T>;
    footerComponent?: ReactElement | Array<ReactElement>;
    rowRenderer?: (type: string | number, data: any, index: number) => JSX.Element;
}
