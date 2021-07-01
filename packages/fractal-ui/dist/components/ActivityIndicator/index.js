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
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { Layer } from '../containers/Layer';
import { getActivityIndicatorAccessibilityProps } from './accessibility/getActivityIndicatorAccessibilityProps';
const BackgroundCircle = styled(motion.circle) `
    stroke: ${({ color }) => color};
    opacity: 0.2;
`;
const AnimatedSection = styled(motion.circle) `
    stroke: ${({ color }) => color};
    stroke-dasharray: 80;
    stroke-dashoffset: 60;
`;
const transition = { repeat: Infinity, type: 'ease', duration: 0.75 };
const animate = {
    rotate: 360
};
const ActivityIndicator = forwardRef((_a, ref) => {
    var { color } = _a, others = __rest(_a, ["color"]);
    return (React.createElement(Layer, Object.assign({ ref: ref, animate: animate, transition: transition }, others),
        React.createElement(motion.svg, { height: '100%', width: '100%', viewBox: '0 0 32 32' },
            React.createElement(BackgroundCircle, Object.assign({ cx: '16', cy: '16', fill: 'none', r: '14', strokeWidth: '4', color: color }, getActivityIndicatorAccessibilityProps())),
            React.createElement(AnimatedSection, { cx: '16', cy: '16', fill: 'none', r: '14', strokeWidth: '4', color: color }))));
});
ActivityIndicator.displayName = 'ActivityIndicator';
export { ActivityIndicator };
//# sourceMappingURL=index.js.map