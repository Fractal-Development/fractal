import { AnimatePresence } from 'framer-motion';
import React from 'react';
import { useTheme } from '../../context';
import { Chip } from '../Chip';
import { ScrollWrapper } from './ScrollWrapper';
const styleVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1 }
};
export function ChipList({ data, getLabel, onItemPress }) {
    const { spacings, colors, borderRadius } = useTheme();
    const renderItem = (item) => {
        return (React.createElement(Chip, { initial: styleVariants.hidden, animate: styleVariants.visible, exit: styleVariants.hidden, margin: spacings.s, key: item.id, onCrossButtonPress: () => onItemPress(item), text: getLabel(item) }));
    };
    return (React.createElement(ScrollWrapper, { marginTop: spacings.s, marginBottom: spacings.s, borderRadius: borderRadius.s, backgroundColor: colors.background },
        React.createElement(AnimatePresence, null, data.map(renderItem))));
}
//# sourceMappingURL=index.js.map