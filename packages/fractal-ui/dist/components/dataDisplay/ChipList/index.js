import { AnimatePresence } from 'framer-motion';
import React from 'react';
import { useTheme } from '../../../context';
import { Chip } from '../Chip';
import { ScrollWrapper } from './ScrollWrapper';
const styleVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1 }
};
export function ChipList({ data, getLabel, onItemPress }) {
    const { spacings, colors, borderRadius } = useTheme();
    const renderItem = (item) => {
        return (React.createElement(Chip, { key: item.id, from: styleVariants.hidden, animate: styleVariants.visible, exit: styleVariants.hidden, marginRight: spacings.s, marginBottom: spacings.s, onCrossButtonPress: () => onItemPress(item), text: getLabel(item) }));
    };
    return (React.createElement(ScrollWrapper, { flex: 1, marginTop: spacings.s, marginBottom: spacings.s, borderRadius: borderRadius.s, backgroundColor: colors.background },
        React.createElement(AnimatePresence, null, data.map(renderItem))));
}
//# sourceMappingURL=index.js.map