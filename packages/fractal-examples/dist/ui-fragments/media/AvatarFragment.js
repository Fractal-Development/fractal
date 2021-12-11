import React from 'react';
import { useTheme, Box, Layer, Avatar, Text } from '@bma98/fractal-ui';
import { getTitleTextAccessibilityProps } from '../accessibility/getTitleTextAccessibilityProps';
export function AvatarFragment() {
    const { spacings } = useTheme();
    return (React.createElement(React.Fragment, null,
        React.createElement(Text, Object.assign({ variant: "title" }, getTitleTextAccessibilityProps(1)), "Avatar Fragment"),
        React.createElement(Layer, { marginTop: spacings.s, marginBottom: spacings.xl },
            React.createElement(Box, { marginBottom: spacings.s, flexDirection: "row" },
                React.createElement(Avatar, { source: "https://picsum.photos/id/370/200", label: "Avatar" })))));
}
//# sourceMappingURL=AvatarFragment.js.map