import React from 'react';
import { AudioMessagePlayer } from '@bma98/fractal-media';
import { MessageMediaProps } from './types';

export function MessageAudio({ source }: MessageMediaProps): JSX.Element {
    return <AudioMessagePlayer audioSrc={source} />;
}
