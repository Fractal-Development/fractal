import React from 'react';
import { Text } from 'react-native';
import Svg, { G, Text as SVGText } from 'react-native-svg';
export function YAxisContent({ width, height, ticks, textProps, formatLabel, y, color }) {
    return (React.createElement(React.Fragment, null,
        React.createElement(Text, { style: {
                opacity: 0,
                fontSize: textProps === null || textProps === void 0 ? void 0 : textProps.fontSize,
                fontFamily: textProps === null || textProps === void 0 ? void 0 : textProps.fontFamily,
                fontWeight: textProps === null || textProps === void 0 ? void 0 : textProps.fontWeight
            } }, formatLabel(ticks[0], 0)),
        height > 0 && width > 0 && (React.createElement(Svg, { style: {
                position: 'absolute',
                top: 0,
                left: 0,
                height,
                width
            } },
            React.createElement(G, null, 
            // don't render labels if width isn't measured yet,
            // causes rendering issues
            height > 0 &&
                ticks.map((value, index) => (React.createElement(SVGText, Object.assign({ originY: y(value), textAnchor: 'middle', x: '50%', alignmentBaseline: 'middle', fill: color }, textProps, { key: y(value), y: y(value) }), formatLabel(value, index)))))))));
}
//# sourceMappingURL=index.native.js.map