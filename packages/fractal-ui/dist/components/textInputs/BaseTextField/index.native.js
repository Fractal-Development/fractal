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
import { extractBackgroundProps } from '../../../sharedProps/BackgroundProps';
import { extractBorderProps } from '../../../sharedProps/BorderProps';
import { extractDimensionProps } from '../../../sharedProps/DimensionProps';
import { extractDisplayProps } from '../../../sharedProps/DisplayProps';
import { extractTextProps } from '../../../sharedProps/TextProps';
import { TextInput } from 'react-native';
import { motify } from '@motify/core';
import { useVariantState } from '../../../animations/native/hooks/useVariantState';
const MotiTextInput = motify(TextInput)();
const StyledTextInput = styled(MotiTextInput) `
    ${extractBackgroundProps};
    ${extractDimensionProps};
    ${extractDisplayProps};
    ${extractBorderProps};
    ${extractTextProps};
`;
const BaseTextField = forwardRef((_a, ref) => {
    var { currentVariant, variants } = _a, others = __rest(_a, ["currentVariant", "variants"]);
    const variantState = useVariantState(currentVariant, variants);
    return React.createElement(StyledTextInput, Object.assign({ ref: ref, state: variantState }, others));
});
BaseTextField.displayName = 'BaseTextField';
export { BaseTextField };
//# sourceMappingURL=index.native.js.map