import React, { useCallback } from 'react';
import { HorizontalLayer, Layer, LayerProps, useTheme } from '@bma98/fractal-ui';
import { useMinimalAudioPlayer } from './useMinimalAudioPlayer';
import { PlayPauseButton } from './PlayPauseButton';
import { AudioProgressBar } from './AudioProgressBar';
import { RateToggleButton } from './RateToggleButton';
import { AudioSource } from './types';

export interface AudioMessagePlayerProps extends LayerProps {
    audioSrc: AudioSource;
}

export function AudioMessagePlayer({ audioSrc, ...layerProps }: AudioMessagePlayerProps): JSX.Element {
    const { spacings } = useTheme();
    const { currentTime, duration, isPlaying, handlePlayPause, setPositionManually, setRateManually } = useMinimalAudioPlayer(audioSrc);

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
            <HorizontalLayer alignItems={'center'}>
                <PlayPauseButton isPlaying={isPlaying} onPress={handlePlayPause} />
                <AudioProgressBar
                    duration={duration}
                    currentTime={currentTime}
                    isPlaying={isPlaying}
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

/* <Layer position={'absolute'} bottom={0}>
                        <Text variant='smallLabel' fontSize={12}>{`${formatNumberToTime(trackProgress)}`}</Text>
                    </Layer> */
