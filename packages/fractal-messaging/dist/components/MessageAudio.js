import React from 'react';
import { AudioMessagePlayer } from '@bma98/fractal-media';
import { MESSAGE_AUDIO_HEIGHT } from '../constants';
import { useChatMessageSize } from '../hooks/useChatMessageSize';
export function MessageAudio({ source }) {
    const { width } = useChatMessageSize();
    return React.createElement(AudioMessagePlayer, { audioSrc: source, width: width, height: MESSAGE_AUDIO_HEIGHT });
}
//# sourceMappingURL=MessageAudio.js.map