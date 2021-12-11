import React from 'react';
import { BaseButton } from '@bma98/fractal-ui';
import { PlayCircleIcon } from '../assets/PlayCircleIcon';
export function MediaPlayerButton({ size = 60, onPress }) {
    return (React.createElement(BaseButton, { width: size, height: size, alignItems: 'center', justifyContent: "center", onPress: onPress },
        React.createElement(PlayCircleIcon, { fill: "rgba(255, 255, 255, 0.8)", width: size, height: size })));
}
//# sourceMappingURL=MediaPlayerButton.js.map