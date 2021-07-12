import React, { Fragment } from 'react';
import { Text } from 'react-native';
import Svg, { G, Text as SVGText, TSpan } from 'react-native-svg';
export function XAxisContent({ width, height, textProps, ticks, formatLabel, x, color }) {
    const renderLabelText = (value, index) => {
        const text = formatLabel(value, index);
        const words = typeof text == 'string' ? text.split(' ') : [text];
        return (React.createElement(SVGText, Object.assign({ textAnchor: 'middle', originX: x(value), alignmentBaseline: 'hanging', fontWeight: 'bold' }, textProps, { fill: color, key: index, x: x(value) }),
            words[0],
            words.length >= 2 && (React.createElement(TSpan, { x: x(value), dy: '10', fontWeight: 'normal' }, words[1]))));
    };
    return (React.createElement(Fragment, null,
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
            width > 0 && ticks.map(renderLabelText))))));
}
//# sourceMappingURL=index.platform.js.map
