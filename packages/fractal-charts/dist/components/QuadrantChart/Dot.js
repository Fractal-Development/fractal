import React from 'react';
import { Layer } from '@bma98/fractal-ui';
const SIZE = 8;
export function Dot({ color, addSpacing }) {
    return React.createElement(Layer, { backgroundColor: color, width: SIZE, height: SIZE, borderRadius: SIZE / 2, marginBottom: addSpacing ? 4 : undefined });
}
//# sourceMappingURL=Dot.js.map