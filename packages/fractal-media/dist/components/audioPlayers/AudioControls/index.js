import React, { memo } from 'react';
import { Layer } from '@bma98/fractal-ui';
import { PlayPauseToggleButton } from './PlayPauseToggleButton';
import { AudioControlButton } from './AudioControlButton';
import { AudioControlToggleButton } from './AudioControlToggleButton';
const AudioControls = memo(({ isPlaying, isEnableShuffle, isEnableRepeat, onPlayPausePress, onNextPress, onPreviousPress, onShufflePress, onRepeatPress }) => {
    return (React.createElement(Layer, null,
        React.createElement(Layer, { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
            React.createElement(AudioControlToggleButton, { variant: 'shuffle', active: isEnableShuffle, onPress: onShufflePress }),
            React.createElement(AudioControlButton, { variant: 'previous', onPress: onPreviousPress }),
            React.createElement(PlayPauseToggleButton, { active: !isPlaying, onPress: onPlayPausePress }),
            React.createElement(AudioControlButton, { variant: 'next', onPress: onNextPress }),
            React.createElement(AudioControlToggleButton, { variant: 'repeat', active: isEnableRepeat, onPress: onRepeatPress }))));
});
AudioControls.displayName = 'AudioControls';
export { AudioControls };
//# sourceMappingURL=index.js.map