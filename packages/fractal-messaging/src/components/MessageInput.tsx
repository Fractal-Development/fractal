import React, { forwardRef, useCallback } from 'react';
import { ButtonTextField, LayerProps } from '@bma98/fractal-ui';
import { SendIcon } from '../assets/SendIcon';

interface MessageInputProps extends Partial<Omit<LayerProps, 'children'>> {
    onSend: (message: string) => void;
    onChangeText?: (text: string) => void;
    placeholder?: string;
    useForegroundVariant?: boolean;
}

const MessageInput = forwardRef(({ onSend, useForegroundVariant, ...others }: MessageInputProps, ref: any): JSX.Element => {
    const renderIcon = useCallback((color: string, size: number) => <SendIcon height={size} width={size} fill={color} />, []);

    return (
        <ButtonTextField
            ref={ref}
            buttonVariant={'success'}
            buttonImage={renderIcon}
            onButtonPress={onSend}
            onSubmitEditing={onSend}
            useForegroundVariant={useForegroundVariant}
            {...others}
        />
    );
});

MessageInput.displayName = 'MessageInput';

export { MessageInput };
