import React from 'react';
import { useTheme, Box, Text, RadioGroup } from '@bma98/fractal-ui';
import { getTitleTextAccessibilityProps } from '../accessibility/getTitleTextAccessibilityProps';
export function RadioGroupFragment() {
    const { spacings } = useTheme();
    return (React.createElement(React.Fragment, null,
        React.createElement(Text, Object.assign({ variant: 'title' }, getTitleTextAccessibilityProps(1)), "Radio Group Fragment"),
        React.createElement(Box, { marginTop: spacings.s, marginBottom: spacings.xl },
            React.createElement(RadioGroup, { radioButtons: [
                    { value: '1', label: 'Option One' },
                    { value: '2', label: 'Option Two' }
                ], onValueChange: (value) => console.log(value) }))));
}
//# sourceMappingURL=RadioGroupFragment.js.map