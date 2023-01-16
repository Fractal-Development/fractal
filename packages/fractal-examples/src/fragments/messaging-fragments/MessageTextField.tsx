import { MessageInput } from '@bma98/fractal-messaging';
import { KeyboardAvoidingLayer } from '@bma98/fractal-ui';
import React, { useEffect, useRef } from 'react';

interface Props {
    onSend: (text: string) => void;
}

export function MessageTextField({ onSend }: Props) {
    const inputRef = useRef<any>();

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []);

    return (
        <KeyboardAvoidingLayer keyboardVerticalOffset={100}>
            <MessageInput inputRef={inputRef} useForegroundVariant placeholder='Escribe aquí' onSend={onSend} buttonVariant='alternative' />
        </KeyboardAvoidingLayer>
    );
}
