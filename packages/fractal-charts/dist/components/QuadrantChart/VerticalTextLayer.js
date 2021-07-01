import React from 'react';
import { Layer } from '@bma98/fractal-ui';
import { CenteredText } from './CenteredText';
import { useVerticalTransform } from './useVerticalTransform';
export function VerticalTextLayer({ text, textColor }) {
    const verticalTransform = useVerticalTransform();
    return (React.createElement(Layer, { height: 130, width: 24, position: 'relative' },
        React.createElement(CenteredText, { width: 130, height: 24, position: 'absolute', color: textColor, style: Object.assign({}, verticalTransform) }, text)));
}
//# sourceMappingURL=VerticalTextLayer.js.map