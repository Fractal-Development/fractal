import React from 'react';
import { BaseButton, useTheme } from '@bma98/fractal-ui';
import { PlayPauseIcon } from './AudioControls/PlayPauseIcon';
export function PlayPauseButton({ onPress, isPlaying }) {
    const { colors } = useTheme();
    return (React.createElement(BaseButton, { alignItems: 'center', justifyContent: 'center', width: 36, height: 36, onPress: onPress },
        React.createElement(PlayPauseIcon, { tintColor: colors.text, isPlaying: isPlaying })));
}
//# sourceMappingURL=PlayPauseButton.js.map