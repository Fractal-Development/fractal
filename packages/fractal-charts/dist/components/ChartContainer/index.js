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
import React, { useRef, useCallback, useEffect } from 'react';
import { Layer } from '@bma98/fractal-ui';
export function ChartContainer(_a) {
    var { style, contentStyle, onChangeDimensions, rotate, children, height } = _a, layerProps = __rest(_a, ["style", "contentStyle", "onChangeDimensions", "rotate", "children", "height"]);
    const handleDimensions = useCallback((dimensions) => {
        onChangeDimensions(dimensions);
    }, [onChangeDimensions]);
    const observerRef = useRef(null);
    const resizedContainerRef = useRef(null);
    useEffect(() => {
        if (resizedContainerRef.current) {
            observerRef.current = new ResizeObserver((entries) => {
                // Only care about the first element, we expect one element ot be watched
                const { width, height } = entries[0].contentRect;
                if (height > 0) {
                    handleDimensions({ width, height });
                }
            });
            observerRef.current.observe(resizedContainerRef.current);
        }
        return () => {
            if (observerRef.current)
                observerRef.current.disconnect();
        };
    }, [handleDimensions]);
    useEffect(() => {
        if (resizedContainerRef.current) {
            const width = resizedContainerRef.current.offsetWidth;
            handleDimensions({ width, height });
        }
    }, [handleDimensions, height]);
    return (React.createElement(Layer, Object.assign({ position: 'relative', zIndex: 0, ref: resizedContainerRef, style: style, backgroundColor: 'tomato', height: height }, layerProps),
        React.createElement(Layer, { position: 'relative', zIndex: 0, animate: { rotate: rotate }, style: Object.assign({ flex: 1 }, contentStyle) }, children)));
}
//# sourceMappingURL=index.js.map