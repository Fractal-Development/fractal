import React, { forwardRef, useCallback } from 'react';
import { ButtonTextField } from './ButtonTextField';
import { TrazadoIcon } from '../../assets/TrazadoIcon';

interface MessageInputProps {
    onSend: (message: string) => void;
    onChangeText?: (text: string) => void;
    placeholder?: string;
}

const MessageInput = forwardRef(({ onSend, ...others }: MessageInputProps, ref: any): JSX.Element => {
    const renderIcon = useCallback((color: string, size: number) => <TrazadoIcon height={size} width={size} fill={color} />, []);

    return (
        <ButtonTextField
            ref={ref}
            buttonVariant={'success'}
            buttonImage={renderIcon}
            onButtonPress={onSend}
            onSubmitEditing={onSend}
            buttonAriaLabel={'Message'}
            {...others}
        />
    );
});

MessageInput.displayName = 'MessageInput';

export { MessageInput };
