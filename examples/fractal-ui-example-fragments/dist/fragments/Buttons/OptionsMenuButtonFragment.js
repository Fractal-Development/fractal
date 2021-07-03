import React from 'react';
import { useTheme, Box, OptionsButton, Text } from '@bma98/fractal-ui';
export function OptionsMenuButtonFragment() {
    const { spacings } = useTheme();
    return (React.createElement(React.Fragment, null,
        React.createElement(Text, { variant: 'title' }, "Options Menu Button Example"),
        React.createElement(Box, { marginTop: spacings.s, marginBottom: spacings.xl },
            React.createElement(OptionsButton, null))));
}
//# sourceMappingURL=OptionsMenuButtonFragment.js.map