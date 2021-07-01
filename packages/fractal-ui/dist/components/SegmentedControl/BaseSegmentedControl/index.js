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
import { motion, AnimateSharedLayout } from 'framer-motion';
import styled from 'styled-components';
import { extractBackgroundProps, extractBorderProps, extractDimensionProps, extractDisplayProps, extractShadowProps, extractWebProps } from '../../../sharedProps';
import { useTheme } from '../../../context/hooks/useTheme';
import { SegmentedControlTab } from '../SegmentControlTap';
const Container = styled(motion.ol) `
    list-style: none;
    ${extractBackgroundProps};
    ${extractDimensionProps};
    ${extractDisplayProps};
    ${extractBorderProps};
    ${extractShadowProps};
    ${extractWebProps};
`;
const BaseSegmentedControl = forwardRef((_a, ref) => {
    var { selectedIndex, values, tintColor, backgroundColor, textStyle, activeTextStyle, onTabPress } = _a, layerProps = __rest(_a, ["selectedIndex", "values", "tintColor", "backgroundColor", "textStyle", "activeTextStyle", "onTabPress"]);
    const { colors, borderRadius, sizes } = useTheme();
    return (React.createElement(AnimateSharedLayout, null,
        React.createElement(Container, Object.assign({ ref: ref, tabIndex: 0, margin: 0, padding: 2, width: '100%', backgroundColor: backgroundColor !== null && backgroundColor !== void 0 ? backgroundColor : colors.background, height: sizes.segmentedControlSize, borderRadius: borderRadius.s, display: 'inline-flex', flexDirection: 'row' }, layerProps), values.map((item, index) => {
            return (React.createElement(SegmentedControlTab, { selected: selectedIndex === index, hideDivider: backgroundColor != undefined ||
                    tintColor != undefined ||
                    selectedIndex === index ||
                    index === selectedIndex - 1, key: index, value: item, tintColor: tintColor, textStyle: textStyle, activeTextStyle: activeTextStyle, onSelect: () => {
                    onTabPress(index);
                } }));
        }))));
});
BaseSegmentedControl.displayName = 'BaseSegmentedControl';
export { BaseSegmentedControl };
//# sourceMappingURL=index.js.map