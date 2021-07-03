import React, { useState } from 'react';
import { useTheme, Box, Switch, Text } from '@bma98/fractal-ui';
export function SwitchFragment() {
    const { spacings } = useTheme();
    const [isEnabled, setIsEnabled] = useState(false);
    return (React.createElement(React.Fragment, null,
        React.createElement(Text, { variant: 'title' }, "Switch Example"),
        React.createElement(Box, { marginTop: spacings.s, marginBottom: spacings.xl },
            React.createElement(Switch, { value: isEnabled, onValueChange: (value) => setIsEnabled(value) }))));
}
//# sourceMappingURL=SwitchFragment.js.map