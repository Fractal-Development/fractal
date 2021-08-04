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
import { extractBackgroundProps, extractBorderProps, extractDimensionProps, extractDisplayProps, extractShadowProps, extractTextProps } from '../../../sharedProps';
import { Text } from 'react-native';
import { motify } from '@motify/core';
import { useVariantState } from '../../../animations/native/hooks/useVariantState';
const MotiText = motify(Text)();
const StyledText = styled(MotiText) `
    ${extractBackgroundProps};
    ${extractDimensionProps};
    ${extractDisplayProps};
    ${extractBorderProps};
    ${extractShadowProps};
    ${extractTextProps};
`;
const BaseText = forwardRef((_a, ref) => {
    var { currentVariant, variants, textOverflow } = _a, others = __rest(_a, ["currentVariant", "variants", "textOverflow"]);
    const variantState = useVariantState(currentVariant, variants);
    return React.createElement(StyledText, Object.assign({ ellipsizeMode: textOverflow != null ? 'tail' : undefined, ref: ref, state: variantState }, others));
});
BaseText.displayName = 'BaseText';
export { BaseText };
//# sourceMappingURL=index.native.js.map