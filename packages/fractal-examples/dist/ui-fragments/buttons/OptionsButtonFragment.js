import React from 'react';
import { useTheme, Box, Text, OptionsMenuButton, ChevronDownIcon } from '@bma98/fractal-ui';
import { getTitleTextAccessibilityProps } from '../accessibility/getTitleTextAccessibilityProps';
export function OptionsButtonFragment() {
    const { spacings } = useTheme();
    const optionsValue = ['Option 1', 'Option 2', 'Option 3'];
    return (React.createElement(React.Fragment, null,
        React.createElement(Text, Object.assign({ variant: 'title' }, getTitleTextAccessibilityProps(1)), "Options Button Example"),
        React.createElement(Box, { marginTop: spacings.s, marginBottom: spacings.xl },
            React.createElement(OptionsMenuButton, { options: optionsValue, onOptionPress: (value) => {
                    console.log(value);
                }, customIcon: (color) => React.createElement(ChevronDownIcon, { height: 24, width: 24, fill: color }) }))));
}
//# sourceMappingURL=OptionsButtonFragment.js.map