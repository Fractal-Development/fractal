import React from 'react';
import { useTheme, Box, Separator, Text } from '@bma98/fractal-ui';
export function BoxContentFragment() {
    const { spacings } = useTheme();
    return (React.createElement(React.Fragment, null,
        React.createElement(Text, { variant: 'title' }, "Box Example"),
        React.createElement(Box, { marginTop: spacings.s, marginBottom: spacings.xl },
            React.createElement(Text, { variant: 'normal', marginBottom: spacings.m }, "Use it to separate your components into blocks."),
            React.createElement(Separator, { marginBottom: spacings.m }),
            React.createElement(Text, { variant: 'normal' }, "Like this."))));
}
//# sourceMappingURL=BoxContentFragment.js.map