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
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { extractBackgroundProps, extractBorderProps, extractDimensionProps, extractDisplayProps, extractShadowProps, extractWebProps } from '../../../../sharedProps';
const StyledPressable = styled(motion.button) `
    -moz-appearance: none;
    -webkit-appearance: none;
    outline: none;
    border: none;
    cursor: pointer;
    ${extractBackgroundProps};
    ${extractDimensionProps};
    ${extractDisplayProps};
    ${extractBorderProps};
    ${extractShadowProps};
    ${extractWebProps};
`;
const Pressable = forwardRef((_a, ref) => {
    var { from, currentVariant, animate, onPress, transition = { type: 'spring' } } = _a, others = __rest(_a, ["from", "currentVariant", "animate", "onPress", "transition"]);
    return (React.createElement(StyledPressable, Object.assign({ ref: ref, flexDirection: "column", initial: currentVariant ? 'from' : from, animate: currentVariant !== null && currentVariant !== void 0 ? currentVariant : animate, transition: transition, onClick: onPress }, others)));
});
Pressable.displayName = 'Pressable';
export { Pressable };
//# sourceMappingURL=index.js.map