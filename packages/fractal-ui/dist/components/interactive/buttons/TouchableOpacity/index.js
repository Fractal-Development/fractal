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
import React, { forwardRef, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { extractBackgroundProps, extractBorderProps, extractDimensionProps, extractDisplayProps, extractShadowProps, extractWebProps } from '../../../../sharedProps';
import { useLongPress } from '../hooks/useLongPress';
import { getButtonAccessibilityProps } from '../accessibility/getButtonAccessibilityProps';
const StyledTouchableOpacity = styled(motion.div) `
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
const transition = { type: 'linear', duration: 0.2 };
const TouchableOpacity = forwardRef((_a, ref) => {
    var { from, currentVariant, animate, onPress, onLongPress, whileTap } = _a, others = __rest(_a, ["from", "currentVariant", "animate", "onPress", "onLongPress", "whileTap"]);
    const [pressed, setPressed] = useState(false);
    const tapStyles = Object.assign({ opacity: 0.4 }, whileTap);
    const longPressEvent = useLongPress(onLongPress);
    const handleButtonPress = () => {
        setPressed(true);
        onPress === null || onPress === void 0 ? void 0 : onPress();
    };
    return (React.createElement(StyledTouchableOpacity, Object.assign({ ref: ref, transition: transition, whileTap: tapStyles, flexDirection: 'column', onClick: handleButtonPress, initial: currentVariant ? 'from' : from, animate: currentVariant !== null && currentVariant !== void 0 ? currentVariant : animate }, longPressEvent, getButtonAccessibilityProps(pressed), others)));
});
TouchableOpacity.displayName = 'TouchableOpacity';
export { TouchableOpacity };
//# sourceMappingURL=index.js.map