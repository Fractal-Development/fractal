import React from 'react';
interface MessageInputProps {
    onSend: (message: string) => void;
    onChangeText?: (text: string) => void;
    placeholder?: string;
}
declare const MessageInput: React.ForwardRefExoticComponent<MessageInputProps & React.RefAttributes<unknown>>;
export { MessageInput };
