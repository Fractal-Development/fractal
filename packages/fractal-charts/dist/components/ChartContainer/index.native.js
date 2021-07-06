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
import React, { useCallback, useEffect } from 'react';
import { Layer } from '@bma98/fractal-ui';
import Animated, { useSharedValue, useAnimatedStyle, withSpring, runOnUI } from 'react-native-reanimated';
export function ChartContainer(_a) {
    var { style, contentStyle, onChangeDimensions, rotate, children } = _a, layerProps = __rest(_a, ["style", "contentStyle", "onChangeDimensions", "rotate", "children"]);
    const rotation = useSharedValue(0);
    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [{ rotate: `${rotation.value}deg` }]
        };
    });
    const onLayout = useCallback((event) => {
        const { nativeEvent: { layout: { height, width } } } = event;
        onChangeDimensions({ height, width });
    }, [onChangeDimensions]);
    useEffect(() => {
        if (rotate) {
            runOnUI(() => {
                'worklet';
                rotation.value = withSpring(rotate, { damping: 12, stiffness: 90 });
            })();
        }
    }, [rotate, rotation]);
    return (React.createElement(Layer, Object.assign({ style: style }, layerProps),
        React.createElement(Animated.View, { style: [Object.assign({ flex: 1 }, contentStyle), animatedStyle], onLayout: onLayout }, children)));
}
//# sourceMappingURL=index.native.js.map