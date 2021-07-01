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
import React from 'react';
import { useTheme, HorizontalLayer, Layer } from '@bma98/fractal-ui';
import { HorizontalDashed } from './HorizontalDashed';
import { VerticalDashed } from './VerticalDashed';
import { VerticalTextLayer } from './VerticalTextLayer';
import { CenteredText } from './CenteredText';
import { Quadrant } from './Quadrant';
export function QuadrantChart(_a) {
    var { data, showIconInQuadrant, colors, positiveYAxisLabel, negativeYAxisLabel, positiveXAxisLabel, negativeXAxisLabel, firstQuadrantLabel, secondQuadrantLabel, thirdQuadrantLabel, fourthQuadrantLabel, renderQuadrantIcon } = _a, layerProps = __rest(_a, ["data", "showIconInQuadrant", "colors", "positiveYAxisLabel", "negativeYAxisLabel", "positiveXAxisLabel", "negativeXAxisLabel", "firstQuadrantLabel", "secondQuadrantLabel", "thirdQuadrantLabel", "fourthQuadrantLabel", "renderQuadrantIcon"]);
    const { borderRadius } = useTheme();
    return (React.createElement(Layer, Object.assign({}, layerProps),
        React.createElement(Layer, { flex: 1 },
            React.createElement(HorizontalLayer, { flex: 1 },
                React.createElement(VerticalTextLayer, { text: positiveYAxisLabel, textColor: colors.text }),
                React.createElement(Quadrant, { variant: 'first', frequency: data[0], showIcon: showIconInQuadrant == 'first', label: firstQuadrantLabel, colors: colors, renderQuadrantIcon: renderQuadrantIcon, borderTopLeftRadius: borderRadius.m }),
                React.createElement(VerticalDashed, null),
                React.createElement(Quadrant, { variant: 'second', frequency: data[1], showIcon: showIconInQuadrant == 'second', label: secondQuadrantLabel, colors: colors, renderQuadrantIcon: renderQuadrantIcon, borderTopRightRadius: borderRadius.m })),
            React.createElement(HorizontalDashed, null),
            React.createElement(HorizontalLayer, { flex: 1 },
                React.createElement(VerticalTextLayer, { text: negativeYAxisLabel, textColor: colors.text }),
                React.createElement(Quadrant, { variant: 'third', frequency: data[2], showIcon: showIconInQuadrant == 'third', label: thirdQuadrantLabel, colors: colors, renderQuadrantIcon: renderQuadrantIcon, borderBottomLeftRadius: borderRadius.m }),
                React.createElement(VerticalDashed, null),
                React.createElement(Quadrant, { variant: 'fourth', frequency: data[3], showIcon: showIconInQuadrant == 'fourth', label: fourthQuadrantLabel, colors: colors, renderQuadrantIcon: renderQuadrantIcon, borderBottomRightRadius: borderRadius.m }))),
        React.createElement(HorizontalLayer, { paddingLeft: 24 },
            React.createElement(Layer, { flex: 1, alignItems: 'center' },
                React.createElement(CenteredText, { width: 100, marginTop: 4, color: colors.text }, negativeXAxisLabel)),
            React.createElement(VerticalDashed, null),
            React.createElement(Layer, { flex: 1, alignItems: 'center' },
                React.createElement(CenteredText, { width: 100, marginTop: 4, color: colors.text }, positiveXAxisLabel)))));
}
//# sourceMappingURL=index.js.map