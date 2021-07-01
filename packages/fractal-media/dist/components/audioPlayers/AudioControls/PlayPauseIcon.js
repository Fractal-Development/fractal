import React, { memo } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Layer } from '@bma98/fractal-ui';
import { PauseIcon } from '../../../assets/PauseIcon';
import { PlayIcon } from '../../../assets/PlayIcon';
const ICON_SIZE = 20;
const variants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 }
};
const PlayPauseIcon = memo(({ tintColor, isPlaying }) => {
    return (React.createElement(AnimatePresence, null, isPlaying ? (React.createElement(Layer, { initial: variants.initial, animate: variants.animate, exit: variants.exit },
        React.createElement(PauseIcon, { fill: tintColor, width: ICON_SIZE, height: ICON_SIZE }))) : (React.createElement(Layer, { paddingLeft: 2, initial: variants.initial, animate: variants.animate, exit: variants.exit },
        React.createElement(PlayIcon, { fill: tintColor, width: ICON_SIZE, height: ICON_SIZE })))));
});
PlayPauseIcon.displayName = 'PlayPauseIcon';
export { PlayPauseIcon };
//# sourceMappingURL=PlayPauseIcon.js.map