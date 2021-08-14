import React from 'react';
import { useTheme, Box, CrossButton, Text } from '@bma98/fractal-ui';
import { getTitleTextAccessibilityProps } from '../../accessibility/getTitleTextAccessibilityProps';
export function CrossButtonFragment() {
    const { spacings } = useTheme();
    return (React.createElement(React.Fragment, null,
        React.createElement(Text, Object.assign({ variant: 'title' }, getTitleTextAccessibilityProps(1)), "Cross Button Fragment"),
        React.createElement(Box, { alignContent: 'center', marginTop: spacings.s, marginBottom: spacings.xl },
            React.createElement(CrossButton, { onPress: () => console.log('Cross button pressed') }))));
}
//# sourceMappingURL=CrossButtonFragment.js.map