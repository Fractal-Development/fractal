import React from 'react';
export function PieChartContent({ width, height, data, pieSlices, createArc, onPress }) {
    return (React.createElement("svg", { width: width, height: height },
        React.createElement("g", { transform: `translate(${width / 2} ${height / 2})` }, pieSlices.map((slice, index) => {
            var _a;
            const { color } = data[index];
            return React.createElement("path", { key: `pie-${index}`, fill: color, onClick: () => onPress === null || onPress === void 0 ? void 0 : onPress(index), d: (_a = createArc(slice)) !== null && _a !== void 0 ? _a : undefined });
        }))));
}
//# sourceMappingURL=index.js.map