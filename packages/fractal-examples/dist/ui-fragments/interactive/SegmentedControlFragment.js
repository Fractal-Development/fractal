import React, { useState } from 'react';
import { useTheme, Box, SegmentedControl, Text } from '@bma98/fractal-ui';
import { getTitleTextAccessibilityProps } from '../accessibility/getTitleTextAccessibilityProps';
export function SegmentedControlFragment() {
    const { spacings } = useTheme();
    const [selectedIndex, setSelectedIndex] = useState(0);
    return (React.createElement(React.Fragment, null,
        React.createElement(Text, Object.assign({ variant: "title" }, getTitleTextAccessibilityProps(1)), "Segmented Control Fragment"),
        React.createElement(Box, { marginTop: spacings.s, marginBottom: spacings.xl },
            React.createElement(SegmentedControl, { selectedIndex: selectedIndex, values: ['One', 'Two'], onChange: (value, index) => {
                    console.log(value);
                    setSelectedIndex(index);
                }, onValueChange: (value) => {
                    console.log('On Value Change: ', value);
                } }))));
}
//# sourceMappingURL=SegmentedControlFragment.js.map