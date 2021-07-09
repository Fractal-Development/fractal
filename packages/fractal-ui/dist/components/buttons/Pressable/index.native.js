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
import styled from 'styled-components/native';
import { motify } from '@motify/core';
import { extractBackgroundProps } from '../../../sharedProps/BackgroundProps';
import { extractBorderProps } from '../../../sharedProps/BorderProps';
import { extractDimensionProps } from '../../../sharedProps/DimensionProps';
import { extractDisplayProps } from '../../../sharedProps/DisplayProps';
import { extractShadowProps } from '../../../sharedProps/ShadowProps';
import { Pressable as RNPressable } from 'react-native';
import { usePressableAnimationStyles } from '../../../animations/native/hooks/usePressableAnimationStyles';
import { useVariantState } from '../../../animations/native/hooks/useVariantState';
const MotiPressable = motify(RNPressable)();
const StyledPressable = styled(MotiPressable) `
    ${extractBackgroundProps};
    ${extractDimensionProps};
    ${extractDisplayProps};
    ${extractBorderProps};
    ${extractShadowProps};
`;
const Pressable = forwardRef((_a, ref) => {
    var { style, currentVariant, variants } = _a, others = __rest(_a, ["style", "currentVariant", "variants"]);
    const [tapStyles, handlePressIn, handlePressOut] = usePressableAnimationStyles(others);
    const variantState = useVariantState(currentVariant, variants);
    return (React.createElement(StyledPressable, Object.assign({ ref: ref, state: variantState, onPressIn: handlePressIn, onPressOut: handlePressOut, style: [tapStyles, style] }, others)));
});
Pressable.displayName = 'Pressable';
export { Pressable };
//# sourceMappingURL=index.native.js.map