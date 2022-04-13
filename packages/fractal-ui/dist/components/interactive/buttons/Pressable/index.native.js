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
import { Pressable as RNPressable } from 'react-native';
import { extractBackgroundProps, extractBorderProps, extractDimensionProps, extractDisplayProps, extractShadowProps } from '../../../../sharedProps';
import { useVariantState } from '../../../../animations/native/hooks/useVariantState';
const MotiPressable = motify(RNPressable)();
const StyledPressable = styled(MotiPressable) `
    ${extractBackgroundProps};
    ${extractDimensionProps};
    ${extractDisplayProps};
    ${extractBorderProps};
    ${extractShadowProps};
`;
const Pressable = forwardRef((_a, ref) => {
    var { currentVariant, variants } = _a, others = __rest(_a, ["currentVariant", "variants"]);
    const variantState = useVariantState(currentVariant, variants);
    return React.createElement(StyledPressable, Object.assign({ ref: ref, padding: 0, state: variantState }, others));
});
Pressable.displayName = 'Pressable';
export { Pressable };
//# sourceMappingURL=index.native.js.map