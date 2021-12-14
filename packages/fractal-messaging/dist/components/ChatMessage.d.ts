import { ChatMessageProps, MinimalMessageData } from './types';
export declare function ChatMessage<T extends MinimalMessageData>({ message, onFavoritePress, onSharePress, messageActions, getBubbleColor, children, parsePatterns }: ChatMessageProps<T>): JSX.Element;
