import React, { useState } from 'react';
import { useTheme, Box, Slider, Text } from '@bma98/fractal-ui';
import { getTitleTextAccessibilityProps } from '../accessibility/getTitleTextAccessibilityProps';
export function SliderFragment() {
    const { spacings } = useTheme();
    const [sliderValue, setSliderValue] = useState(0);
    const handleSliderValue = (value) => setSliderValue(value);
    return (React.createElement(React.Fragment, null,
        React.createElement(Text, Object.assign({ variant: "title" }, getTitleTextAccessibilityProps(1)), "Slider Fragment"),
        React.createElement(Box, { marginTop: spacings.s, marginBottom: spacings.xl },
            React.createElement(Slider, { step: 1, minimumValue: 0, maximumValue: 100, onSlidingComplete: handleSliderValue, onSlidingStart: () => console.log('Slide started') }),
            React.createElement(Text, { variant: "normal" }, `Value: ${sliderValue}`))));
}
//# sourceMappingURL=SliderFragment.js.map