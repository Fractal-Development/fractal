import React from 'react';
import { BaseButton, ActionButtonProps } from '@bma98/fractal-ui';
import { PlayCircleIcon } from '../assets/PlayCircleIcon';

export function MediaPlayerButton({ size = 60, onPress }: ActionButtonProps): JSX.Element {
    return (
        <BaseButton width={size} height={size} alignItems='center' justifyContent='center' onPress={onPress}>
            <PlayCircleIcon fill='rgba(255, 255, 255, 0.8)' width={size} height={size} />
        </BaseButton>
    );
}
