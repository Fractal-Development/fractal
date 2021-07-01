import React from 'react';
import { PlayPauseIcon } from './PlayPauseIcon';
import { getPlayPauseButtonAccessibilityProps } from '../accessibility/getPlayPauseButtonAccessibilityProps';
import { RoundedToggleButton } from '@bma98/fractal-ui';
export function PlayPauseToggleButton({ active, onPress }) {
    return (React.createElement(RoundedToggleButton, Object.assign({ active: active, onPress: onPress, variant: 'main' }, getPlayPauseButtonAccessibilityProps()), (tintColor) => React.createElement(PlayPauseIcon, { tintColor: tintColor, isPlaying: !active })));
}
//# sourceMappingURL=PlayPauseToggleButton.js.map