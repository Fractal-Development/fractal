import React from 'react';
import { ChatMessageProps, MinimalMessageData } from './types';
interface BaseChatMessageProps<T extends MinimalMessageData> extends Omit<ChatMessageProps<T>, 'onFavoritePress' | 'onSharePress' | 'messageActions'> {
    onLongPress?: () => void;
}
export declare const BaseChatMessage: React.ForwardRefExoticComponent<BaseChatMessageProps<MinimalMessageData> & React.RefAttributes<unknown>>;
export {};
