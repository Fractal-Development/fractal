var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React, { useRef, useCallback } from 'react';
import { Layer } from '@bma98/fractal-ui';
export function ChartContainer(_a) {
    var { style, contentStyle, onChangeDimensions, rotate, children } = _a, layerProps = __rest(_a, ["style", "contentStyle", "onChangeDimensions", "rotate", "children"]);
    const handleDimensions = useCallback((dimensions) => {
        onChangeDimensions(dimensions);
    }, [onChangeDimensions]);
    const observerRef = useRef(new ResizeObserver((entries) => {
        const { width, height } = entries[0].contentRect;
        handleDimensions({ width, height });
    }));
    const resizedContainerRef = useCallback((container) => {
        if (container !== null) {
            observerRef.current.observe(container);
        }
        // When element is unmounted, ref callback is called with a null argument
        // => best time to cleanup the observer
        else {
            if (observerRef.current)
                observerRef.current.disconnect();
        }
    }, []);
    return (React.createElement(Layer, Object.assign({ position: 'relative', zIndex: 0, ref: resizedContainerRef, style: style }, layerProps),
        React.createElement(Layer, { position: 'relative', zIndex: 0, animate: { rotate: rotate }, style: Object.assign({ flex: 1 }, contentStyle) }, children)));
}
//# sourceMappingURL=index.js.map