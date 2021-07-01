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
import Reanimated from 'react-native-reanimated';
import { extractBackgroundProps } from '../../../sharedProps/BackgroundProps';
import { extractDimensionProps } from '../../../sharedProps/DimensionProps';
import { extractDisplayProps } from '../../../sharedProps/DisplayProps';
import { extractBorderProps } from '../../../sharedProps/BorderProps';
import { extractShadowProps } from '../../../sharedProps/ShadowProps';
import { useAnimationStyles } from '../../../animations/native/hooks/useAnimationStyles';
const StyledImageBackground = styled(Reanimated.createAnimatedComponent(RNImageBackground)) `
    ${extractBackgroundProps};
    ${extractDimensionProps};
    ${extractDisplayProps};
    ${extractBorderProps};
    ${extractShadowProps};
`;
const ImageBackground = forwardRef((_a, ref) => {
    var { source, resizeMode, style } = _a, others = __rest(_a, ["source", "resizeMode", "style"]);
    const animationStyles = useAnimationStyles(others);
    return (React.createElement(StyledImageBackground, Object.assign({ ref: ref, resizeMode: resizeMode, source: typeof source == 'string' ? { uri: source } : source }, others, { style: [animationStyles, style] })));
});
ImageBackground.displayName = 'ImageBackground';
export { ImageBackground };
//# sourceMappingURL=index.native.js.map