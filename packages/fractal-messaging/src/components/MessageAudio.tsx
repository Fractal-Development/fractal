import React from 'react';
import { AudioMessagePlayer } from '@bma98/fractal-media';
import { MessageMediaProps } from './types';
import { MESSAGE_AUDIO_HEIGHT } from '../constants';

export function MessageAudio({ source }: MessageMediaProps): JSX.Element {
    return <AudioMessagePlayer audioSrc={source} height={MESSAGE_AUDIO_HEIGHT} />;
}
