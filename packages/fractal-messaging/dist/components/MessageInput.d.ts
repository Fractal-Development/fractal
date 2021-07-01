import React from 'react';
import { LayerProps } from '@bma98/fractal-ui';
interface MessageInputProps extends Partial<Omit<LayerProps, 'children'>> {
    onSend: (message: string) => void;
    onChangeText?: (text: string) => void;
    placeholder?: string;
    useForegroundVariant?: boolean;
}
declare const MessageInput: React.ForwardRefExoticComponent<MessageInputProps & React.RefAttributes<unknown>>;
export { MessageInput };
