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
import { useTheme } from '../../context/hooks/useTheme';
import { Box } from '../containers/Box';
import { Text } from '../text';
import { CrossButton } from '../buttons';
import { getChipAccessibilityProps } from './accessibility/getChipAccessibilityProps';
const Chip = forwardRef((_a, ref) => {
    var { text, children, onCrossButtonPress } = _a, others = __rest(_a, ["text", "children", "onCrossButtonPress"]);
    const { spacings } = useTheme();
    return (React.createElement(Box, Object.assign({ ref: ref, maxWidth: 200, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', padding: spacings.xs }, getChipAccessibilityProps(text), others),
        text != null ? (React.createElement(Text, { variant: 'normal', overflow: 'hidden', numberOfLines: 1 }, text)) : null,
        children,
        React.createElement(CrossButton, { marginLeft: spacings.xs, onPress: onCrossButtonPress })));
});
Chip.displayName = 'Chip';
export { Chip };
//# sourceMappingURL=index.js.map