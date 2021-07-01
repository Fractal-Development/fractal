import React from 'react';
import { OmniPlayer } from '@bma98/fractal-media';
import { useTheme } from '@bma98/fractal-ui';
import { useChatMessageSize } from '../hooks/useChatMessageSize';
export function MessageVideo({ source }) {
    const { borderRadius } = useTheme();
    const { width, height } = useChatMessageSize();
    return React.createElement(OmniPlayer, { source: source, width: width, height: height, borderRadius: borderRadius.xs, alignSelf: 'center' });
}
//# sourceMappingURL=MessageVideo.js.map