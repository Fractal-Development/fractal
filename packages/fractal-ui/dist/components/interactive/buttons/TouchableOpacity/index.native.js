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
import { TouchableOpacity as RNTouchableOpacity } from 'react-native';
import { extractBackgroundProps, extractBorderProps, extractDimensionProps, extractDisplayProps, extractShadowProps } from '../../../../sharedProps';
import { useVariantState } from '../../../../animations/native/hooks/useVariantState';
const MotiTouchableOpacity = motify(RNTouchableOpacity)();
const StyledTouchableOpacity = styled(MotiTouchableOpacity) `
    ${extractBackgroundProps};
    ${extractDimensionProps};
    ${extractDisplayProps};
    ${extractBorderProps};
    ${extractShadowProps};
`;
const TouchableOpacity = forwardRef((_a, ref) => {
    var { currentVariant, variants } = _a, others = __rest(_a, ["currentVariant", "variants"]);
    const variantState = useVariantState(currentVariant, variants);
    return React.createElement(StyledTouchableOpacity, Object.assign({ ref: ref, state: variantState }, others));
});
TouchableOpacity.displayName = 'TouchableOpacity';
export { TouchableOpacity };
//# sourceMappingURL=index.native.js.map