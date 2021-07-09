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
import { extractBackgroundProps, extractBorderProps, extractDimensionProps, extractDisplayProps, extractShadowProps } from '../../sharedProps';
import { Image as RNImage } from 'react-native';
import { motify } from '@motify/core';
import { useVariantState } from '../../animations/native/hooks/useVariantState';
const MotiImage = motify(RNImage)();
const StyledImage = styled(MotiImage) `
    ${extractBackgroundProps};
    ${extractDimensionProps};
    ${extractDisplayProps};
    ${extractBorderProps};
    ${extractShadowProps};
`;
const Image = forwardRef((_a, ref) => {
    var { source, resizeMode, currentVariant, variants } = _a, others = __rest(_a, ["source", "resizeMode", "currentVariant", "variants"]);
    const variantState = useVariantState(currentVariant, variants);
    return (React.createElement(StyledImage, Object.assign({ ref: ref, state: variantState, source: typeof source == 'string' ? { uri: source } : source, resizeMode: resizeMode }, others)));
});
Image.displayName = 'Image';
export { Image };
//# sourceMappingURL=index.native.js.map