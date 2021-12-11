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
import React, { forwardRef, useCallback } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { extractBackgroundProps, extractBorderProps, extractDimensionProps, extractDisplayProps, extractShadowProps, extractTextProps, extractWebProps } from '../../../sharedProps';
const StyledText = styled(motion.span) `
    user-select: ${({ selectable }) => (selectable ? 'auto' : 'none')};
    ${extractBackgroundProps};
    ${extractDimensionProps};
    ${extractDisplayProps};
    ${extractBorderProps};
    ${extractShadowProps};
    ${extractWebProps};
    ${extractTextProps};
`;
const BaseText = forwardRef((_a, ref) => {
    var { from, currentVariant, animate, whiteSpace = 'pre-wrap', wordWrap = 'break-word', display = null, onPress, cursor } = _a, others = __rest(_a, ["from", "currentVariant", "animate", "whiteSpace", "wordWrap", "display", "onPress", "cursor"]);
    const handleClick = useCallback((e) => {
        if (onPress != null) {
            e.stopPropagation();
            onPress(e);
        }
    }, [onPress]);
    return (React.createElement(StyledText, Object.assign({ ref: ref, onClick: handleClick, initial: currentVariant ? 'from' : from, animate: currentVariant !== null && currentVariant !== void 0 ? currentVariant : animate, display: display, whiteSpace: whiteSpace, wordWrap: wordWrap, cursor: onPress && !cursor ? 'pointer' : cursor }, others)));
});
BaseText.displayName = 'BaseText';
export { BaseText };
//# sourceMappingURL=index.js.map