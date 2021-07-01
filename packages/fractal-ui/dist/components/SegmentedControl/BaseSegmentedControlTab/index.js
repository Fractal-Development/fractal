import React from 'react';
import { Text } from '../../text';
import { useTheme } from '../../../context/hooks/useTheme';
import styled from 'styled-components';
import { extractDimensionProps } from '../../../sharedProps/DimensionProps';
import { motion } from 'framer-motion';
import { extractBackgroundProps } from '../../../sharedProps/BackgroundProps';
import { extractShadowProps } from '../../../sharedProps/ShadowProps';
import { extractBorderProps } from '../../../sharedProps/BorderProps';
import { getSegmentedControlButtonAccessibilityProps } from '../accessibility/getSegmentedControlButtonAccessibilityProps';
const Button = styled.button `
    position: relative;
    ${extractDimensionProps};
    line-height: 1;
    background: transparent;
    border: none;
    outline: none;
    cursor: pointer;

    &:hover,
    &:focus {
        cursor: pointer;
    }
`;
const Tap = styled(motion.li) `
    position: relative;
    margin-bottom: 0;
    line-height: 1;
    width: 100%;
    ${(props) => props.noDivider
    ? `&:after {
        opacity: 0;
    }`
    : `&:after {
        position: absolute;
        top: 25%;
        right: -0.5px;
        display: block;
        width: 1px;
        height: 50%;
        background-color: gray;
        transition: opacity 200ms ease-out;
        content: '';
    }`}
    &:last-of-type:after {
        display: none;
    }
`;
const Slider = styled(motion.div) `
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
    content: '';
    width: 100%;
    justify-content: center;
    align-items: center;
    ${extractBackgroundProps}
    ${extractShadowProps}
    ${extractBorderProps}
`;
export function BaseSegmentedControlTab({ onSelect, selected, value, hideDivider, fontFamily, fontSize, color, fontWeight, fontStyle, tintColor }) {
    const { borderRadius, colors, shadows } = useTheme();
    return (React.createElement(Tap, { noDivider: hideDivider !== null && hideDivider !== void 0 ? hideDivider : selected, whileTap: selected ? { scale: 0.95 } : { opacity: 0.6 } },
        React.createElement(Button, Object.assign({ margin: 0, width: '100%', height: '100%', type: 'button', onClick: onSelect }, getSegmentedControlButtonAccessibilityProps(selected)),
            selected && (React.createElement(Slider, { layoutId: 'SegmentedControlActive', backgroundColor: tintColor !== null && tintColor !== void 0 ? tintColor : colors.foreground, boxShadow: shadows.mainShadow, borderRadius: borderRadius.s })),
            React.createElement(Text, { variant: 'normal', position: 'relative', zIndex: 2, fontFamily: fontFamily, fontSize: fontSize, color: color, fontWeight: fontWeight, fontStyle: fontStyle }, value))));
}
//# sourceMappingURL=index.js.map