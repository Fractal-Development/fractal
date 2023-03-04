import React, { useEffect, useRef } from 'react';
import { Box } from '../../layout/Box';
import { Layer } from '../../layout/Layer';
import { Text } from '../../text/Text';

interface ToastProps {
    message: string;
    close: () => void;
    duration?: number;
    margin?: number;
}

export function Toast({ message, close, duration, margin }: ToastProps) {
    const savedCallback = useRef(close);

    useEffect(() => {
        savedCallback.current = close;
    }, [close]);

    useEffect(() => {
        if (duration === null) return;
        const id = setTimeout(() => savedCallback.current(), duration);

        return () => clearTimeout(id);
    }, [duration]);

    return (
        <Layer layout from={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} margin={margin}>
            <Box layout>
                <Layer layout>
                    <Text>{message}</Text>
                </Layer>
            </Box>
        </Layer>
    );
}
