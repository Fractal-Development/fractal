import React from 'react';
export function XAxisContent({ width, height, textProps, ticks, formatLabel, x, color }) {
    var _a;
    const renderLabelText = (text, value) => {
        const words = typeof text === 'string' ? text.split(' ') : [text];
        return (React.createElement(React.Fragment, null,
            words[0],
            words.length >= 2 && (React.createElement("tspan", { x: x(value), dy: '18', fontWeight: 'normal' }, words[1]))));
    };
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
            width > 0 &&
                ticks.map((value, index) => (React.createElement("text", Object.assign({ textAnchor: 'middle', vertOriginX: x(value), alignmentBaseline: 'hanging', fontFamily: 'system-ui', fontWeight: 'bold' }, textProps, { fill: color, key: index, x: x(value) }), renderLabelText(formatLabel(value, index), value)))))))));
}
//# sourceMappingURL=index.js.map