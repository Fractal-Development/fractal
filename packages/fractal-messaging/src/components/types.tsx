import { ReactElement, ReactNode } from 'react';
import { ButtonVariant, KeyboardAvoidingLayerProps, LayerProps, TouchableOpacityProps, ParseShape } from '@bma98/fractal-ui';

export interface BubbleTriangleProps {
    color: string;
}

export interface BubbleProps extends BubbleTriangleProps, Omit<TouchableOpacityProps, 'color'> {
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
    messageID?: string;
}

export interface ChatMessageProps<T> {
    message: T;
    onFavoritePress?: (message: T) => void;
    onSharePress?: (message: T) => void;
    messageActions?: (message: T) => ReactNode;
    getBubbleColor?: (message: T) => string;
    children?: (message: T) => ReactNode;
    parsePatterns?: Array<ParseShape>;
    containerWidth?: number;
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

export interface RowRendererProps<T extends MinimalMessageData> extends Omit<ChatMessageProps<T>, 'children'> {
    index: number;
}

export interface MessageListProps<T extends MinimalMessageData>
    extends Omit<ChatMessageProps<T>, 'message' | 'children'>,
        Omit<LayerProps, 'children'> {
    messages: Array<T>;
    footerComponent?: ReactElement | Array<ReactElement>;
    rowRenderer?: (props: RowRendererProps<T>) => JSX.Element;
}
