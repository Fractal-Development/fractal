import React from 'react';
import { TextButton, useTheme } from '@bma98/fractal-ui';
export function NavigationBarButton(props) {
    const { navigationBar } = useTheme();
    return React.createElement(TextButton, Object.assign({}, props, { variant: 'main', textProps: navigationBar.textButton }));
}
//# sourceMappingURL=NavigationBarButton.js.map