import React, { useCallback } from 'react';
import { Layer, useTheme } from '@fractal/fractal-ui';
import { RoundedIconButton } from './RoundedIconButton';
import { ChatMessageProps, MinimalMessageData } from './types';

export function MessageActions<T extends MinimalMessageData>({ message, onFavoritePress, onSharePress }: ChatMessageProps<T>): JSX.Element {
    const { spacings } = useTheme();

    const handleFavorite = useCallback(() => onFavoritePress?.(message), [message, onFavoritePress]);
    const handleShare = useCallback(() => onSharePress?.(message), [message, onSharePress]);

    return (
        <Layer padding={spacings.m}>
            <RoundedIconButton iconName='star' color={message.favorite ? '#ffc107' : '#999999'} onPress={handleFavorite} />
            <Layer height={spacings.m} />
            <RoundedIconButton iconName='upload' color='#999999' onPress={handleShare} />
        </Layer>
    );
}
