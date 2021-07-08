import React from 'react';
import { useTheme, Box, DatePicker, Text } from '@bma98/fractal-ui';
import { getTitleTextAccessibilityProps } from '../accessibility/getTitleTextAccessibilityProps';
export function DatePickerFragment() {
    const { spacings } = useTheme();
    return (React.createElement(React.Fragment, null,
        React.createElement(Text, Object.assign({ variant: 'title' }, getTitleTextAccessibilityProps(1)), "Date Picker Example"),
        React.createElement(Box, { marginTop: spacings.s, marginBottom: spacings.xl },
            React.createElement(DatePicker, { iosDoneText: 'Done', onChange: (date) => console.log('Local Date: ', date.toLocaleDateString()) }))));
}
//# sourceMappingURL=DatePickerFragment.js.map