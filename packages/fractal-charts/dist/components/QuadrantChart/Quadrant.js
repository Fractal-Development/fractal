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
import { useTheme, Layer, HorizontalLayer } from '@bma98/fractal-ui';
import { CenteredText } from './CenteredText';
import { Dot } from './Dot';
import { chunkArray } from './utils/chunkArray';
const ICON_SIZE = 60;
export function Quadrant(_a) {
    var { label, frequency, variant, showIcon, colors, renderQuadrantIcon } = _a, others = __rest(_a, ["label", "frequency", "variant", "showIcon", "colors", "renderQuadrantIcon"]);
    const { spacings, colors: themeColors } = useTheme();
    const tintColor = colors[`${variant}Quadrant`];
    const frequencyArray = Array.from(Array(frequency).keys());
    const chunkFrequencyArray = chunkArray(frequencyArray, 8);
    const renderDot = (index) => {
        const isLastIndex = index == frequency - 1;
        return React.createElement(Dot, { key: `dot-${index}`, color: tintColor, addSpacing: !isLastIndex });
    };
    return (React.createElement(Layer, Object.assign({ flex: 1, backgroundColor: themeColors.background, padding: spacings.xs }, others),
        React.createElement(HorizontalLayer, { flex: 1 },
            chunkFrequencyArray.map((dots, index) => {
                return (React.createElement(Layer, { key: `${index}`, marginRight: 4 }, dots.map(renderDot)));
            }),
            showIcon && (React.createElement(Layer, { flex: 1, justifyContent: 'center', alignItems: 'center' }, renderQuadrantIcon === null || renderQuadrantIcon === void 0 ? void 0 : renderQuadrantIcon(tintColor, ICON_SIZE, variant)))),
        React.createElement(CenteredText, { fontSize: 12, color: colors.text }, label)));
}
//# sourceMappingURL=Quadrant.js.map