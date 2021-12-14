import { MessageListProps, MinimalMessageData } from './types';
export declare function MessageList<T extends MinimalMessageData>({ messages, onFavoritePress, onSharePress, messageActions, getBubbleColor, footerComponent, rowRenderer, parsePatterns, ...layerProps }: MessageListProps<T>): JSX.Element;
