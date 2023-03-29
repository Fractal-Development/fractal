import React from 'react';
import { AudioMessagePlayer } from '@fractal-software/fractal-media';
import { MessageMediaProps } from './types';
import { MESSAGE_AUDIO_HEIGHT } from '../constants';
import { useChatMessageSize } from '../hooks/useChatMessageSize';

export function MessageAudio({ source, messageID }: MessageMediaProps): JSX.Element {
    const { width } = useChatMessageSize();
    return <AudioMessagePlayer audioSrc={source} messageID={messageID} width={width} height={MESSAGE_AUDIO_HEIGHT} />;
}
