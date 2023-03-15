import React, { useCallback } from 'react';
import { ActivityIndicator, HorizontalLayer, Layer, LayerProps, useTheme } from '@fractal/fractal-ui';
import { useMinimalAudioPlayer } from './useMinimalAudioPlayer';
import { PlayPauseButton } from './PlayPauseButton';
import { AudioProgressBar } from './AudioProgressBar';
import { RateToggleButton } from './RateToggleButton';
import { AudioSource } from './types';

export interface AudioMessagePlayerProps extends LayerProps {
    audioSrc: AudioSource;
    messageID?: string;
}

export function AudioMessagePlayer({ audioSrc, messageID, ...layerProps }: AudioMessagePlayerProps): JSX.Element {
    const { spacings, colors } = useTheme();
    const { currentTime, duration, isPlaying, handlePlayPause, setPositionManually, setRateManually, loading } = useMinimalAudioPlayer(
        audioSrc,
        messageID
    );

    const handleUpdateTime = useCallback(
        async (positionMillis: number) => {
            await setPositionManually(positionMillis);
        },
        [setPositionManually]
    );

    const handleUpdateRate = useCallback(
        async (rate: number) => {
            await setRateManually(rate);
        },
        [setRateManually]
    );

    return (
        <Layer {...layerProps}>
            <HorizontalLayer alignItems='center'>
                {loading ? (
                    <Layer width={36} height={36} justifyContent='center' alignItems='center'>
                        <ActivityIndicator width={24} height={24} color={colors.mainInteractiveColor} />
                    </Layer>
                ) : (
                    <PlayPauseButton isPlaying={isPlaying} onPress={handlePlayPause} />
                )}
                <AudioProgressBar
                    duration={duration}
                    currentTime={currentTime}
                    onTimeUpdate={handleUpdateTime}
                    timeLabelsSpacing={spacings.xs}
                    flex={1}
                    marginLeft={spacings.s}
                    marginRight={spacings.s}
                />
                <RateToggleButton onChangeRate={handleUpdateRate} />
            </HorizontalLayer>
        </Layer>
    );
}
