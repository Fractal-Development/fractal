import React from 'react';
import { Image } from '@bma98/fractal-ui';
import { useChatMessageSize } from '../hooks/useChatMessageSize';
export function MessageImage({ source }) {
    const { width, height } = useChatMessageSize();
    return React.createElement(Image, { source: source, resizeMode: 'contain', width: width, height: height });
}
//# sourceMappingURL=MessageImage.js.map