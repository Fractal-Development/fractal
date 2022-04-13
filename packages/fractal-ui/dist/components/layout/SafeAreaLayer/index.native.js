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
import { SafeAreaView } from 'react-native';
import { useVariantState } from '../../../animations/native/hooks/useVariantState';
import { SharedStyles } from '../../../sharedProps/SharedStyles';
const MotiSafeAreaView = motify(SafeAreaView)();
const StyledSafeAreaLayer = styled(MotiSafeAreaView) `
    ${SharedStyles};
`;
const SafeAreaLayer = forwardRef((_a, ref) => {
    var { currentVariant, variants } = _a, others = __rest(_a, ["currentVariant", "variants"]);
    const variantState = useVariantState(currentVariant, variants);
    return React.createElement(StyledSafeAreaLayer, Object.assign({ ref: ref, state: variantState }, others));
});
SafeAreaLayer.displayName = 'Layer';
export { SafeAreaLayer };
//# sourceMappingURL=index.native.js.map