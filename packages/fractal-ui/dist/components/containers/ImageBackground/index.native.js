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
import { ImageBackground as RNImageBackground } from 'react-native';
import { extractBackgroundProps, extractBorderProps, extractDimensionProps, extractDisplayProps, extractShadowProps } from '../../../sharedProps';
import { motify } from '@motify/core';
import { useVariantState } from '../../../animations/native/hooks/useVariantState';
const MotiImageBackground = motify(RNImageBackground)();
const StyledImageBackground = styled(MotiImageBackground) `
    ${extractBackgroundProps};
    ${extractDimensionProps};
    ${extractDisplayProps};
    ${extractBorderProps};
    ${extractShadowProps};
`;
const ImageBackground = forwardRef((_a, ref) => {
    var { source, currentVariant, variants } = _a, others = __rest(_a, ["source", "currentVariant", "variants"]);
    const variantState = useVariantState(currentVariant, variants);
    return (React.createElement(StyledImageBackground, Object.assign({ ref: ref, state: variantState, source: typeof source == 'string' ? { uri: source } : source }, others)));
});
ImageBackground.displayName = 'ImageBackground';
export { ImageBackground };
//# sourceMappingURL=index.native.js.map