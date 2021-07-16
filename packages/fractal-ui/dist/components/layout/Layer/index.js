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
import { extractBackgroundProps, extractBorderProps, extractDimensionProps, extractDisplayProps, extractShadowProps, extractWebProps } from '../../../sharedProps';
const StyledLayer = styled(motion.div) `
    ${extractBackgroundProps};
    ${extractDimensionProps};
    ${extractDisplayProps};
    ${extractBorderProps};
    ${extractShadowProps};
    ${extractWebProps};
`;
const Layer = forwardRef((_a, ref) => {
    var { from, currentVariant, animate, transition = { type: 'spring' } } = _a, others = __rest(_a, ["from", "currentVariant", "animate", "transition"]);
    return (React.createElement(StyledLayer, Object.assign({ ref: ref, flexDirection: 'column', initial: currentVariant ? 'from' : from, animate: currentVariant !== null && currentVariant !== void 0 ? currentVariant : animate, transition: transition }, others)));
});
Layer.displayName = 'Layer';
export { Layer };
//# sourceMappingURL=index.js.map