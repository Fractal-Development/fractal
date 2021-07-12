import React, { useCallback } from 'react';
import { useSetThemeIdentifier, useTheme, Box, Button, Text } from '@bma98/fractal-ui';
import { getTitleTextAccessibilityProps } from './accessibility/getTitleTextAccessibilityProps';
export function ThemeSwapper() {
    const { spacings } = useTheme();
    const setThemeIdentifier = useSetThemeIdentifier();
    const handlePress = useCallback(() => setThemeIdentifier((current) => (current === 'light' ? 'dark' : 'light')), [setThemeIdentifier]);
    return (React.createElement(React.Fragment, null,
        React.createElement(Text, Object.assign({ variant: 'title' }, getTitleTextAccessibilityProps(1)), "Swap Theme"),
        React.createElement(Box, { marginTop: spacings.s, marginBottom: spacings.xl },
            React.createElement(Button, { onPress: handlePress, variant: 'alternative', text: 'Swap Theme' }))));
}
//# sourceMappingURL=ThemeSwapper.js.map