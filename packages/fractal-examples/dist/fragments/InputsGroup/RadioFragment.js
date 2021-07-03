import React from 'react';
import { useTheme, Box, Text, RadioGroup } from '@bma98/fractal-ui';
export function RadioFragment() {
    const { spacings } = useTheme();
    return (React.createElement(React.Fragment, null,
        React.createElement(Text, { variant: 'title' }, "Radio Example"),
        React.createElement(Box, { marginTop: spacings.s, marginBottom: spacings.xl },
            React.createElement(RadioGroup, { radioButtons: [
                    { value: '1', label: 'Option One' },
                    { value: '2', label: 'Option Two' }
                ], onValueChange: (value) => console.log(value) }))));
}
//# sourceMappingURL=RadioFragment.js.map