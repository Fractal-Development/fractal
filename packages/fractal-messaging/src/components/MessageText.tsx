import React from 'react';
import { Text } from '@bma98/fractal-ui';

interface MessageTextProps {
    text: string | undefined;
    color?: string;
}

export function MessageText({ text, color }: MessageTextProps): JSX.Element {
    return (
        <Text variant='normal' color={color} style={{ textAlign: 'left' }}>
            {text}
        </Text>
    );
}
