import React from 'react';
import { useTheme, Box, Text } from '@bma98/fractal-ui';
export function MessageInputFragment() {
    const { spacings } = useTheme();
    return (React.createElement(React.Fragment, null,
        React.createElement(Text, { variant: 'title' }, "Message Input Example"),
        React.createElement(Box, { marginTop: spacings.s, marginBottom: spacings.xl })));
}
//# sourceMappingURL=MessageInputFragment.js.map