import React from 'react';
import { OmniPlayer } from '@fractal/fractal-media';
import { useTheme } from '@fractal/fractal-ui';
import { MessageMediaProps } from './types';
import { useChatMessageSize } from '../hooks/useChatMessageSize';

export function MessageVideo({ source }: MessageMediaProps): JSX.Element {
    const { borderRadius } = useTheme();
    const { width, height } = useChatMessageSize();
    return <OmniPlayer source={source} width={width} height={height} borderRadius={borderRadius.xs} alignSelf='center' />;
}
