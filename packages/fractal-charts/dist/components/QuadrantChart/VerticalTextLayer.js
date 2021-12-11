import React from 'react';
import { Layer } from '@bma98/fractal-ui';
import { CenteredText } from './CenteredText';
import { VerticalLayer } from './VerticalLayer';
export function VerticalTextLayer({ text, textColor }) {
    return (React.createElement(Layer, { height: 130, width: 24, position: "relative" },
        React.createElement(VerticalLayer, null,
            React.createElement(Layer, { flex: 1, alignItems: "center" },
                React.createElement(CenteredText, { color: textColor }, text)))));
}
//# sourceMappingURL=VerticalTextLayer.js.map