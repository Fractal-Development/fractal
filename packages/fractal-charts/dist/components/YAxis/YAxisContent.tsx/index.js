import React from 'react';
export function YAxisContent({ width, height, ticks, textProps, formatLabel, y, color }) {
    var _a;
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { style: {
                opacity: 0,
                fontFamily: (_a = textProps === null || textProps === void 0 ? void 0 : textProps.fontFamily) !== null && _a !== void 0 ? _a : 'system-ui',
                fontSize: textProps === null || textProps === void 0 ? void 0 : textProps.fontSize,
                fontWeight: textProps === null || textProps === void 0 ? void 0 : textProps.fontWeight
            } }, formatLabel(ticks[0], 0)),
        height > 0 && width > 0 && (React.createElement("svg", { style: {
                position: 'absolute',
                top: 0,
                left: 0,
                height,
                width
            } },
            React.createElement("g", null, 
            // don't render labels if width isn't measured yet,
            // causes rendering issues
            height > 0 &&
                ticks.map((value, index) => (React.createElement("text", Object.assign({ vertOriginY: y(value), textAnchor: 'middle', x: '50%', alignmentBaseline: 'middle', fill: color, fontFamily: 'system-ui' }, textProps, { key: y(value), y: y(value) }), formatLabel(value, index)))))))));
}
//# sourceMappingURL=index.js.map