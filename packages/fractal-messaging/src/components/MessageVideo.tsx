import React from 'react';
import { OmniPlayerPoster } from '@fractal/fractal-media';
import { useTheme } from '@fractal/fractal-ui';
import { MessageMediaProps } from './types';
import { useChatMessageSize } from '../hooks/useChatMessageSize';

interface MessageVideoProps extends MessageMediaProps {
    onPlayPress?: () => void;
}

export function MessageVideo({ source, onPlayPress }: MessageVideoProps): JSX.Element {
    const { borderRadius } = useTheme();
    const { width, height } = useChatMessageSize();
    return (
        <OmniPlayerPoster
            source={source}
            onPlayPress={onPlayPress}
            width={width}
            height={height}
            borderRadius={borderRadius.xs}
            alignSelf='center'
        />
    );
}
