import React from 'react';
import { useTheme, Layer } from '@bma98/fractal-ui';
export function HorizontalDashed() {
    const { colors } = useTheme();
    return (React.createElement(Layer, { height: 1, overflow: "hidden" },
        React.createElement(Layer, { height: 2, borderStyle: "dashed", borderWidth: 1, borderColor: colors.label })));
}
//# sourceMappingURL=HorizontalDashed.js.map