import React from 'react';
import Svg, { Path, G, Circle } from 'react-native-svg';
import { Grid } from '../../Grid';
import { LinearGradient } from '../LinearGradient';
export function AreaChartContent({ width, height, ticks, x, y, coordinates, paths, areaColor, lineColor, lineWidth, dotRadius, gradientConfig }) {
    var _a, _b;
    return (React.createElement(Svg, { style: { height, width } },
        React.createElement(Grid, { ticks: ticks, y: y }),
        React.createElement(Path, { fill: gradientConfig ? 'url(#gradient)' : areaColor, d: (_a = paths.path) !== null && _a !== void 0 ? _a : undefined }),
        React.createElement(Path, { d: (_b = paths.line) !== null && _b !== void 0 ? _b : undefined, stroke: lineColor !== null && lineColor !== void 0 ? lineColor : areaColor, strokeWidth: lineWidth, fill: 'none' }),
        React.createElement(G, null, coordinates.map((dot) => {
            return (React.createElement(Circle, { key: `dot-${dot.x}-${dot.y}`, cx: x === null || x === void 0 ? void 0 : x(dot.x), cy: y(dot.y), r: dotRadius !== null && dotRadius !== void 0 ? dotRadius : 3, fill: lineColor !== null && lineColor !== void 0 ? lineColor : areaColor }));
        })),
        gradientConfig && (React.createElement(LinearGradient, { startColor: gradientConfig.startColor, startOpacity: gradientConfig.startOpacity, endColor: gradientConfig.endColor, endOpacity: gradientConfig.endOpacity }))));
}
//# sourceMappingURL=index.native.js.map