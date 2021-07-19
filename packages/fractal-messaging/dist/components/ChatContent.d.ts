import { ChatContentProps, MinimalMessageData } from './types';
export declare function ChatContent<T extends MinimalMessageData>({ messages, onFavoritePress, onSharePress, messageActions, onSend, placeholder, isLoading, keyboardAvoidingViewProps, ...layerProps }: ChatContentProps<T>): JSX.Element;
