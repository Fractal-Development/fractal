import React from 'react';
import { BaseButton, useTheme } from '@bma98/fractal-ui';
import { PlayPauseIcon } from './AudioControls/PlayPauseIcon';

export interface PlayPauseButtonProps {
    isPlaying: boolean;
    onPress: () => void;
}

export function PlayPauseButton({ onPress, isPlaying }: PlayPauseButtonProps): JSX.Element {
    const { colors } = useTheme();
    return (
        <BaseButton alignItems={'center'} justifyContent={'center'} width={36} height={36} onPress={onPress}>
            <PlayPauseIcon tintColor={colors.text} isPlaying={isPlaying} />
        </BaseButton>
    );
}
