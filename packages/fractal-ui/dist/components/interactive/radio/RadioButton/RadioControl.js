import React, { useMemo } from 'react';
import { AnimatePresence } from 'framer-motion';
import { useTheme } from '../../../../context/hooks/useTheme';
import { Layer } from '../../../layout/Layer';
import { Text } from '../../../text';
const circleVariants = { from: { scale: 0 }, active: { scale: 1 } };
export function RadioControl({ active, label }) {
    const { colors, sizes, spacings } = useTheme();
    const innerSize = sizes.radioButtonSize / 2;
    const ringVariants = useMemo(() => ({ from: { borderColor: colors.placeholder }, active: { borderColor: colors.mainInteractiveColor } }), [colors]);
    return (React.createElement(React.Fragment, null,
        React.createElement(Layer, { width: sizes.radioButtonSize, height: sizes.radioButtonSize, display: 'flex', flexShrink: 0, borderRadius: sizes.radioButtonSize / 2, borderWidth: 2, alignItems: 'center', borderStyle: 'solid', justifyContent: 'center', variants: ringVariants, currentVariant: active ? 'active' : 'from' },
            React.createElement(AnimatePresence, null, active && (React.createElement(Layer, { width: innerSize, height: innerSize, borderRadius: innerSize / 2, backgroundColor: colors.mainInteractiveColor, from: circleVariants.from, animate: circleVariants.active, exit: circleVariants.from })))),
        label && (React.createElement(Text, { marginLeft: spacings.xs, variant: 'normal' }, label))));
}
//# sourceMappingURL=RadioControl.js.map