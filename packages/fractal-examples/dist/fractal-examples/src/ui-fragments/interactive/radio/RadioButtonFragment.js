import React, { useState } from 'react';
import { useTheme, Box, Text, RadioButton } from '@bma98/fractal-ui';
import { getTitleTextAccessibilityProps } from '../../accessibility/getTitleTextAccessibilityProps';
export function RadioButtonFragment() {
    const { spacings } = useTheme();
    const [activeButton, setActiveButton] = useState(false);
    return (React.createElement(React.Fragment, null,
        React.createElement(Text, Object.assign({ variant: 'title' }, getTitleTextAccessibilityProps(1)), "Radio Button Fragment"),
        React.createElement(Box, { marginTop: spacings.s, marginBottom: spacings.xl },
            React.createElement(RadioButton, { label: 'Radio Button', value: 'Button 1', active: activeButton, onPress: () => setActiveButton((active) => !active) }))));
}
//# sourceMappingURL=RadioButtonFragment.js.map