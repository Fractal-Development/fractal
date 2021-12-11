import React from 'react';
import { useTheme, Box, Text } from '@bma98/fractal-ui';
import { getTitleTextAccessibilityProps } from '../../accessibility/getTitleTextAccessibilityProps';
export function MessageInputFragment() {
    const { spacings } = useTheme();
    return (React.createElement(React.Fragment, null,
        React.createElement(Text, Object.assign({ variant: "title" }, getTitleTextAccessibilityProps(1)), "Message Input Fragment"),
        React.createElement(Box, { marginTop: spacings.s, marginBottom: spacings.xl })));
}
//# sourceMappingURL=MessageInputFragment.js.map