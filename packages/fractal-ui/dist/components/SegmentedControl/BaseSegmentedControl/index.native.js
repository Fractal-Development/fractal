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
import Reanimated from 'react-native-reanimated';
import styled from 'styled-components/native';
import { SegmentedControlTab } from '../SegmentControlTap';
import { SegmentsSeparators } from '../SegmentsSeparators';
import { Layer } from '../../containers/Layer';
import { useTheme } from '../../../context/hooks/useTheme';
import { extractBorderProps, extractShadowProps } from '../../../sharedProps';
import { useSegmentManager } from './hooks/useSegmentManager';
const SegmentsContainer = styled.View `
    flex: 1;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    background-color: transparent;
    z-index: 99;
    elevation: 2;
`;
const Slider = styled(Reanimated.View) `
    position: absolute;
    top: 2px;
    bottom: 2px;
    right: 2px;
    left: 2px;
    elevation: 1;
    ${extractShadowProps};
    ${extractBorderProps};
`;
const BaseSegmentedControl = forwardRef((_a, ref) => {
    var { selectedIndex, values, tintColor, backgroundColor, textStyle, activeTextStyle, onTabPress } = _a, layerProps = __rest(_a, ["selectedIndex", "values", "tintColor", "backgroundColor", "textStyle", "activeTextStyle", "onTabPress"]);
    const { colors, shadows, borderRadius, sizes } = useTheme();
    const { segmentWidth, handleLayout, sliderStyle } = useSegmentManager(values.length, selectedIndex, tintColor || colors.foreground);
    return (React.createElement(Layer, Object.assign({ ref: ref, overflow: 'hidden', position: 'relative', height: sizes.segmentedControlSize, backgroundColor: backgroundColor !== null && backgroundColor !== void 0 ? backgroundColor : colors.background, borderRadius: borderRadius.s, onLayout: handleLayout }, layerProps),
        !backgroundColor && !tintColor && React.createElement(SegmentsSeparators, { values: values.length, selectedIndex: selectedIndex }),
        React.createElement(SegmentsContainer, null, values &&
            values.map((value, index) => {
                return (React.createElement(SegmentedControlTab, { selected: selectedIndex === index, key: index, value: value, tintColor: tintColor, textStyle: textStyle, activeTextStyle: activeTextStyle, onSelect: () => {
                        onTabPress(index);
                    } }));
            })),
        selectedIndex != null && segmentWidth ? (React.createElement(Slider, { boxShadow: shadows.mainShadow, borderRadius: borderRadius.s, style: sliderStyle })) : null));
});
BaseSegmentedControl.displayName = 'BaseSegmentedControl';
export { BaseSegmentedControl };
//# sourceMappingURL=index.native.js.map