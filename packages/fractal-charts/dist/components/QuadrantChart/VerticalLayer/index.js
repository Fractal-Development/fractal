import React from 'react';
import { Layer } from '@bma98/fractal-ui';
export function VerticalLayer({ children }) {
    return (React.createElement(Layer, { width: 130, height: 24, position: "absolute", style: { transform: 'translateX(-53px) translateY(53px) rotate(-90deg)' } }, children));
}
//# sourceMappingURL=index.js.map