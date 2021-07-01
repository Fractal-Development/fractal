import React from 'react';
import Svg, { G, Path } from 'react-native-svg';
export function PieChartContent({ width, height, data, pieSlices, createArc, onPress }) {
    return (React.createElement(Svg, { style: { height, width } },
        React.createElement(G, { x: width / 2, y: height / 2 }, pieSlices.map((slice, index) => {
            var _a;
            const { color } = data[index];
            return React.createElement(Path, { key: `pie-${index}`, fill: color, onPress: () => onPress === null || onPress === void 0 ? void 0 : onPress(index), d: (_a = createArc(slice)) !== null && _a !== void 0 ? _a : undefined });
        }))));
}
//# sourceMappingURL=index.native.js.map