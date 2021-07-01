import React from 'react';
import { PlayPauseIcon } from './PlayPauseIcon';
import { ControlToggleButtonProps } from './types';
import { getPlayPauseButtonAccessibilityProps } from '../accessibility/getPlayPauseButtonAccessibilityProps';
import { RoundedToggleButton } from '@bma98/fractal-ui';

export function PlayPauseToggleButton({ active, onPress }: Omit<ControlToggleButtonProps, 'variant'>): JSX.Element {
    return (
        <RoundedToggleButton active={active} onPress={onPress} variant={'main'} {...getPlayPauseButtonAccessibilityProps()}>
            {(tintColor: string) => <PlayPauseIcon tintColor={tintColor} isPlaying={!active} />}
        </RoundedToggleButton>
    );
}
