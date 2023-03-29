import React from 'react';
import { Image } from '@fractal-software/fractal-ui';
import { MessageMediaProps } from './types';
import { useChatMessageSize } from '../hooks/useChatMessageSize';

export function MessageImage({ source }: MessageMediaProps): JSX.Element {
    const { width, height } = useChatMessageSize();
    return <Image source={source} resizeMode='contain' width={width} height={height} />;
}
