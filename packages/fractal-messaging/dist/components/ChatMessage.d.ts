import { ChatMessageProps, MinimalMessageData } from './types';
export declare function ChatMessage<T extends MinimalMessageData>({ message, onFavoritePress, onSharePress, messageActions, getBubbleColor, children }: ChatMessageProps<T>): JSX.Element;
