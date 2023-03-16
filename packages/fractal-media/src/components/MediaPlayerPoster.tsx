import React from 'react';
import { ImageBackground, ImageBackgroundProps } from '@fractal-software/fractal-ui';
import { MediaPlayerButton } from './MediaPlayerButton';

export interface MediaPlayerPosterProps extends ImageBackgroundProps {
    onPlayPress?: () => void;
    playerButtonSize?: number;
}

export function MediaPlayerPoster({ onPlayPress, playerButtonSize, ...others }: MediaPlayerPosterProps): JSX.Element {
    return (
        <ImageBackground alignItems='center' justifyContent='center' {...others}>
            <MediaPlayerButton onPress={onPlayPress} size={playerButtonSize} />
        </ImageBackground>
    );
}
