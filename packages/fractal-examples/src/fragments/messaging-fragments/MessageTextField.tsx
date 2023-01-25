import { MessageInput } from '@fractal/fractal-messaging';
import { KeyboardAvoidingLayer } from '@fractal/fractal-ui';
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
        <KeyboardAvoidingLayer keyboardVerticalOffset={120}>
            <MessageInput inputRef={inputRef} useForegroundVariant placeholder='Escribe aquí' onSend={onSend} buttonVariant='alternative' />
        </KeyboardAvoidingLayer>
    );
}
