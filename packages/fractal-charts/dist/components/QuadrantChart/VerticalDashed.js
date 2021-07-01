import React from 'react';
import { useTheme, Layer } from '@bma98/fractal-ui';
export function VerticalDashed() {
    const { colors } = useTheme();
    return (React.createElement(Layer, { width: 1, overflow: 'hidden' },
        React.createElement(Layer, { width: 2, flexGrow: 1, borderStyle: 'dashed', borderWidth: 1, borderColor: colors.label })));
}
//# sourceMappingURL=VerticalDashed.js.map