import { ChatMessageProps, MinimalMessageData } from './types';
export declare function MessageActions<T extends MinimalMessageData>({ message, onFavoritePress, onSharePress }: ChatMessageProps<T>): JSX.Element;
