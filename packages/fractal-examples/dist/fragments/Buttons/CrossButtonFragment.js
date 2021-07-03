import React from 'react';
import { useTheme, Box, CrossButton, Text } from '@bma98/fractal-ui';
export function CrossButtonFragment() {
    const { spacings } = useTheme();
    return (React.createElement(React.Fragment, null,
        React.createElement(Text, { variant: 'title' }, "Cross Button Example"),
        React.createElement(Box, { alignContent: 'center', marginTop: spacings.s, marginBottom: spacings.xl },
            React.createElement(CrossButton, { onPress: () => console.log('Cross button pressed') }))));
}
//# sourceMappingURL=CrossButtonFragment.js.map