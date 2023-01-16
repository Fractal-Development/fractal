import React, { useState, useEffect } from 'react';
import { Layer, Text, Slider, useTheme, LayerProps } from '@bma98/fractal-ui';
import { formatNumberToTime } from './utils/formatNumberToTime';

interface AudioProgressBarProps extends LayerProps {
    duration: number;
    currentTime: number;
    onTimeUpdate: (time: number) => Promise<void>;
    timeLabelsSpacing?: number;
}

export function AudioProgressBar({
    duration,
    currentTime,
    onTimeUpdate,
    timeLabelsSpacing,
    ...layerProps
}: AudioProgressBarProps): JSX.Element {
    const { spacings } = useTheme();
    const [trackProgress, setTrackProgress] = useState(0);
    const [isDragging, setIsDragging] = useState(false);

    const handleSlidingStart = () => setIsDragging(true);

    const handleValueChange = (positionMillis: number) => setTrackProgress(positionMillis);

    const handleSlidingComplete = async (time: number): Promise<void> => {
        await onTimeUpdate(time);
        setIsDragging(false);
    };

    useEffect(() => {
        if (!isDragging && trackProgress !== currentTime) {
            setTrackProgress(currentTime);
        }
    }, [currentTime, isDragging, trackProgress]);

    return (
        <Layer {...layerProps}>
            <Slider
                value={trackProgress}
                minimumValue={0}
                step={1}
                maximumValue={duration}
                onSlidingStart={handleSlidingStart}
                onValueChange={handleValueChange}
                onSlidingComplete={handleSlidingComplete}
            />
            <Layer flexDirection='row' justifyContent='space-between' marginTop={timeLabelsSpacing ?? spacings.s}>
                <Text variant='smallLabel' fontSize={12}>{`${formatNumberToTime(trackProgress)}`}</Text>
                <Text variant='smallLabel' fontSize={12}>{`${formatNumberToTime(duration)}`}</Text>
            </Layer>
        </Layer>
    );
}
