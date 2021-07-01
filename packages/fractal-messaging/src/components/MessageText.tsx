import React from 'react';
import { Text } from '@bma98/fractal-ui';

interface MessageTextProps {
    text: string | undefined;
}

export function MessageText({ text }: MessageTextProps): JSX.Element {
    return (
        <Text variant='normal' style={{ textAlign: 'left' }}>
            {text}
        </Text>
    );
}
