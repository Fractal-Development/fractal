import React, { useState } from 'react';
import { useTheme, Box, Slider, Text } from '../../../src';

export function SliderFragment(): JSX.Element {
    const { spacings } = useTheme();
    const [sliderValue, setSliderValue] = useState(0);

    const handleSliderValue = (value: number) => setSliderValue(value);

    return (
        <>
            <Text variant={'title'}>Slider Example</Text>
            <Box marginTop={spacings.s} marginBottom={spacings.xl}>
                <Slider
                    step={1}
                    minimumValue={0}
                    maximumValue={100}
                    onSlidingComplete={handleSliderValue}
                    onSlidingStart={() => console.log('Slide started')}
                />
                <Text variant={'normal'}>{`Value: ${sliderValue}`}</Text>
            </Box>
        </>
    );
}
