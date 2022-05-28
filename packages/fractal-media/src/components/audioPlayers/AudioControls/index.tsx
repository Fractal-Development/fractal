import React, { memo } from 'react';
import { Layer } from '@bma98/fractal-ui';
import { AudioControlsProps } from './types';
import { PlayPauseToggleButton } from './PlayPauseToggleButton';
import { AudioControlButton } from './AudioControlButton';
import { AudioControlToggleButton } from './AudioControlToggleButton';

const AudioControls = memo(
    ({
        isPlaying,
        isEnableShuffle,
        isEnableRepeat,
        onPlayPausePress,
        onNextPress,
        onPreviousPress,
        onShufflePress,
        onRepeatPress
    }: AudioControlsProps): JSX.Element => (
        <Layer flexDirection='row' alignItems='center' justifyContent='space-between'>
            <AudioControlToggleButton variant='shuffle' active={isEnableShuffle} onPress={onShufflePress} />
            <AudioControlButton variant='previous' onPress={onPreviousPress} />
            <PlayPauseToggleButton active={!isPlaying} onPress={onPlayPausePress} />
            <AudioControlButton variant='next' onPress={onNextPress} />
            <AudioControlToggleButton variant='repeat' active={isEnableRepeat} onPress={onRepeatPress} />
        </Layer>
    )
);

AudioControls.displayName = 'AudioControls';

export { AudioControls };
