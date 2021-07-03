import React, { useState } from 'react';
import { useTheme, Box, CheckBox, Text } from '@bma98/fractal-ui';
export function CheckBoxFragment() {
    const { spacings } = useTheme();
    const [isChecked, setIsChecked] = useState(false);
    return (React.createElement(React.Fragment, null,
        React.createElement(Text, { variant: 'title' }, "Check Box Example"),
        React.createElement(Box, { marginTop: spacings.s, marginBottom: spacings.xl },
            React.createElement(CheckBox, { value: isChecked, onValueChange: (value) => setIsChecked(value), label: 'Selectable' }))));
}
//# sourceMappingURL=CheckBoxFragment.js.map