import React from 'react';
import { Defs, LinearGradient as LinearGradientSvg, Stop } from 'react-native-svg';
export function LinearGradient({ startColor, startOpacity, endColor, endOpacity }) {
    return (React.createElement(Defs, null,
        React.createElement(LinearGradientSvg, { id: "gradient", x1: "0%", y1: "0%", x2: "0%", y2: "100%" },
            React.createElement(Stop, { offset: "0%", stopColor: startColor, stopOpacity: startOpacity }),
            React.createElement(Stop, { offset: "100%", stopColor: endColor, stopOpacity: endOpacity }))));
}
//# sourceMappingURL=index.native.js.map