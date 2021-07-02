import React, { useCallback } from 'react';
import { Button, useSetThemeIdentifier, Text } from '@bma98/fractal-ui';
export function ThemeSwapper() {
    const setThemeIdentifier = useSetThemeIdentifier();
    const handlePress = useCallback(() => setThemeIdentifier((current) => (current === 'light' ? 'dark' : 'light')), [setThemeIdentifier]);
    return (React.createElement(React.Fragment, null,
        React.createElement(Text, { variant: 'title' }, "Swap Theme"),
        React.createElement(Button, { onPress: handlePress, variant: 'alternative', text: 'Swap Theme' })));
}
//# sourceMappingURL=ThemeSwapper.js.map