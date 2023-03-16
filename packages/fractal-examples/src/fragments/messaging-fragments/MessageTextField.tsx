import { MessageInput } from '@fractal-software/fractal-messaging';
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

    return <MessageInput inputRef={inputRef} useForegroundVariant placeholder='Escribe aquí' onSend={onSend} buttonVariant='alternative' />;
}
