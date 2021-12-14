import React from 'react';
import { RichText } from '@bma98/fractal-ui';
export function MessageText({ text, color, parsePatterns }) {
    return (React.createElement(RichText, { style: { textAlign: 'left', color }, parse: parsePatterns, childrenProps: { allowFontScaling: false } }, text));
}
//# sourceMappingURL=MessageText.js.map