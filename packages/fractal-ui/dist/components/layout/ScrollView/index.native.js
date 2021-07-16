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
import { extractBackgroundProps, extractBorderProps, extractDimensionProps, extractDisplayProps, extractShadowProps } from '../../../sharedProps';
import { motify } from '@motify/core';
import { ScrollView as RNScrollView } from 'react-native';
import { useVariantState } from '../../../animations/native/hooks/useVariantState';
const MotiScrollView = motify(RNScrollView)();
const StyledScrollView = styled(MotiScrollView) `
    ${extractBackgroundProps};
    ${extractDimensionProps};
    ${extractDisplayProps};
    ${extractBorderProps};
    ${extractShadowProps};
`;
const ScrollView = forwardRef((_a, ref) => {
    var { currentVariant, variants } = _a, others = __rest(_a, ["currentVariant", "variants"]);
    const variantState = useVariantState(currentVariant, variants);
    return React.createElement(StyledScrollView, Object.assign({ ref: ref, state: variantState }, others));
});
ScrollView.displayName = 'Layer';
export { ScrollView };
//# sourceMappingURL=index.native.js.map