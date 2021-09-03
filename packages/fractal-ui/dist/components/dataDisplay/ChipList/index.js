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
import { AnimatePresence } from 'framer-motion';
import React from 'react';
import { useTheme } from '../../../context';
import { Chip } from '../Chip';
import { ScrollWrapper } from './ScrollWrapper';
const styleVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1 }
};
export function ChipList(_a) {
    var { data, getLabel, onItemPress } = _a, others = __rest(_a, ["data", "getLabel", "onItemPress"]);
    const { spacings, colors, borderRadius } = useTheme();
    const renderItem = (item) => {
        return (React.createElement(Chip, { key: item.id, animate: styleVariants.visible, exit: styleVariants.hidden, marginRight: spacings.s, marginBottom: spacings.s, onCrossButtonPress: () => onItemPress(item), text: getLabel(item) }));
    };
    return (React.createElement(ScrollWrapper, Object.assign({ padding: spacings.s, marginTop: spacings.s, marginBottom: spacings.s, borderRadius: borderRadius.s, backgroundColor: colors.background }, others),
        React.createElement(AnimatePresence, null, data.map(renderItem))));
}
//# sourceMappingURL=index.js.map