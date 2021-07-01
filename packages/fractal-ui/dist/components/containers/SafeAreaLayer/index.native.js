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
import Reanimated from 'react-native-reanimated';
import { extractBackgroundProps } from '../../../sharedProps/BackgroundProps';
import { extractBorderProps } from '../../../sharedProps/BorderProps';
import { extractDimensionProps } from '../../../sharedProps/DimensionProps';
import { extractDisplayProps } from '../../../sharedProps/DisplayProps';
import { extractShadowProps } from '../../../sharedProps/ShadowProps';
import { SafeAreaView } from 'react-native';
import { useAnimationStyles } from '../../../animations/native/hooks/useAnimationStyles';
const StyledLayer = styled(Reanimated.createAnimatedComponent(SafeAreaView)) `
    ${extractBackgroundProps};
    ${extractDimensionProps};
    ${extractDisplayProps};
    ${extractBorderProps};
    ${extractShadowProps};
`;
const SafeAreaLayer = forwardRef((_a, ref) => {
    var { style } = _a, others = __rest(_a, ["style"]);
    const animationStyles = useAnimationStyles(others);
    return React.createElement(StyledLayer, Object.assign({ ref: ref }, others, { style: [animationStyles, style] }));
});
SafeAreaLayer.displayName = 'SafeAreaLayer';
export { SafeAreaLayer };
//# sourceMappingURL=index.native.js.map