import React from 'react';
import { useTheme, Box, TimePicker, Text } from '@bma98/fractal-ui';
import { getTitleTextAccessibilityProps } from '../../accessibility/getTitleTextAccessibilityProps';
export function TimePickerFragment() {
    const { spacings } = useTheme();
    return (React.createElement(React.Fragment, null,
        React.createElement(Text, Object.assign({ variant: "title" }, getTitleTextAccessibilityProps(1)), "Time Picker Fragment"),
        React.createElement(Box, { marginTop: spacings.s, marginBottom: spacings.xl },
            React.createElement(TimePicker, { iosDoneText: 'Done', onChange: (date) => console.log(date.toLocaleDateString()) }))));
}
//# sourceMappingURL=TimePickerFragment.js.map