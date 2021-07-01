import React from 'react';
export function LinearGradient({ startColor, startOpacity, endColor, endOpacity }) {
    return (React.createElement("defs", null,
        React.createElement("linearGradient", { id: 'gradient', x1: '0%', y1: '0%', x2: '0%', y2: '100%' },
            React.createElement("stop", { offset: '0%', stopColor: startColor, stopOpacity: startOpacity }),
            React.createElement("stop", { offset: '100%', stopColor: endColor, stopOpacity: endOpacity }))));
}
//# sourceMappingURL=index.js.map