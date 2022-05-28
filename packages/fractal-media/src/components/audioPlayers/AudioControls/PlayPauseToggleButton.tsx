import React from 'react';
import { RoundedToggleButton } from '@bma98/fractal-ui';
import { PlayPauseIcon } from './PlayPauseIcon';
import { ControlToggleButtonProps } from './types';
import { getPlayPauseButtonAccessibilityProps } from '../accessibility/getPlayPauseButtonAccessibilityProps';

export function PlayPauseToggleButton({ active, onPress }: Omit<ControlToggleButtonProps, 'variant'>): JSX.Element {
    return (
        <RoundedToggleButton active={active} onPress={onPress} variant='main' {...getPlayPauseButtonAccessibilityProps()}>
            {(tintColor: string) => <PlayPauseIcon tintColor={tintColor} isPlaying={!active} />}
        </RoundedToggleButton>
    );
}
