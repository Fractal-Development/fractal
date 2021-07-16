import React from 'react';
import { AudioMessagePlayer } from '@bma98/fractal-media';
import { MessageMediaProps } from './types';
import { MESSAGE_AUDIO_HEIGHT } from '../constants';
import { useChatMessageSize } from '../hooks/useChatMessageSize';

export function MessageAudio({ source }: MessageMediaProps): JSX.Element {
    const { width } = useChatMessageSize();
    return <AudioMessagePlayer audioSrc={source} width={width} height={MESSAGE_AUDIO_HEIGHT} />;
}
