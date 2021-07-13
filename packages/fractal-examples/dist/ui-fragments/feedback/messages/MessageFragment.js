import React from 'react';
import { useTheme, Box, Text, Message, LoadIcon } from '@bma98/fractal-ui';
import { getTitleTextAccessibilityProps } from '../../accessibility/getTitleTextAccessibilityProps';
export function MessageFragment() {
    const { spacings } = useTheme();
    return (React.createElement(React.Fragment, null,
        React.createElement(Text, Object.assign({ variant: 'title' }, getTitleTextAccessibilityProps(1)), "Message Fragment"),
        React.createElement(Box, { marginTop: spacings.s, marginBottom: spacings.xl },
            React.createElement(Message, { title: 'Some message', messageType: 'alternative', description: 'You can use it to show any message', icon: () => React.createElement(LoadIcon, null) }))));
}
//# sourceMappingURL=MessageFragment.js.map