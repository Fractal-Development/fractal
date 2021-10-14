import React, { forwardRef, useCallback, useState } from 'react';
import { ButtonTextField, ButtonVariant, LayerProps } from '@bma98/fractal-ui';
import { SendIcon } from '../assets/SendIcon';

interface MessageInputProps extends Partial<Omit<LayerProps, 'children'>> {
    onSend: (message: string) => void;
    buttonVariant?: ButtonVariant;
    onChangeText?: (text: string) => void;
    placeholder?: string;
    useForegroundVariant?: boolean;
    inputRef?: any;
}

const MessageInput = forwardRef(
    ({ onSend, useForegroundVariant, buttonVariant = 'success', inputRef, ...others }: MessageInputProps, ref: any): JSX.Element => {
        const renderIcon = useCallback((color: string, size: number) => <SendIcon height={size} width={size} fill={color} />, []);
        const [message, setMessage] = useState('');

        const handleSendMessage = useCallback(() => {
            if (message != '') {
                onSend(message);
                setMessage('');
            }
        }, [message, onSend]);

        return (
            <ButtonTextField
                ref={ref}
                inputRef={inputRef}
                value={message}
                buttonVariant={buttonVariant}
                buttonImage={renderIcon}
                onButtonPress={handleSendMessage}
                onSubmitEditing={handleSendMessage}
                onChangeText={setMessage}
                useForegroundVariant={useForegroundVariant}
                {...others}
            />
        );
    }
);

MessageInput.displayName = 'MessageInput';

export { MessageInput };
