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
import React, { forwardRef } from 'react';
import { useTheme } from '../../context/hooks/useTheme';
import { Box } from '../containers';
import { HorizontalLayer } from '../containers/HorizontalLayer';
import { Text } from '../text';
import { getTableContainerAccessibilityProps } from './accessibility/getTableContainerAccessibilityProps';
const TableContainer = forwardRef((_a, ref) => {
    var { title, children, titleTextVariant = 'title', titleColorVariant = 'text', label, labelColorVariant = 'text' } = _a, others = __rest(_a, ["title", "children", "titleTextVariant", "titleColorVariant", "label", "labelColorVariant"]);
    const { colors, spacings } = useTheme();
    const getColorName = (colorVariant) => colorVariant !== 'text' ? `${colorVariant}InteractiveColor` : colorVariant;
    const titleColorName = getColorName(titleColorVariant);
    const titleColor = colors[titleColorName];
    const labelColorName = getColorName(labelColorVariant);
    const labelColor = colors[labelColorName];
    return (React.createElement(Box, Object.assign({ ref: ref }, getTableContainerAccessibilityProps(), others),
        React.createElement(HorizontalLayer, { marginBottom: spacings.m, justifyContent: 'space-between', alignItems: 'center' },
            React.createElement(Text, { variant: titleTextVariant, color: titleColor }, title),
            React.createElement(Text, { variant: 'label', color: labelColor }, label)),
        children));
});
TableContainer.displayName = 'TableContainer';
export { TableContainer };
//# sourceMappingURL=TableContainer.js.map