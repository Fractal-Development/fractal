import { ChatContentProps, MinimalMessageData } from './types';
export declare function ChatContent<T extends MinimalMessageData>({ messages, onFavoritePress, onSharePress, messageActions, getBubbleColor, onSend, placeholder, isLoading, keyboardAvoidingViewProps, messageInputButtonVariant, enableFluidFooter, customFooter, rowRenderer, ...layerProps }: ChatContentProps<T>): JSX.Element;
