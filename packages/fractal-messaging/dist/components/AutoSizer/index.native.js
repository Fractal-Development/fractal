import React, { useState } from 'react';
import { Layer } from '@bma98/fractal-ui';
export function AutoSizer({ children, onResize }) {
    const [size, setSize] = useState();
    const handleLayout = (event) => {
        const { nativeEvent: { layout: { width, height } } } = event;
        setSize({ width, height });
        onResize === null || onResize === void 0 ? void 0 : onResize({ width, height });
    };
    return (React.createElement(Layer, { onLayout: handleLayout, flex: 1 }, size && children(size)));
}
//# sourceMappingURL=index.native.js.map