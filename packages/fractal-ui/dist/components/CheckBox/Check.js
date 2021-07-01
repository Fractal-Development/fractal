import React from 'react';
import { CheckIcon } from '../../assets/CheckIcon';
import { useTheme } from '../../context/hooks/useTheme';
import { Layer } from '../containers/Layer';
import { Text } from '../text';
const checkVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1 }
};
export function Check({ value, label }) {
    const { colors, sizes, borderRadius, spacings } = useTheme();
    return (React.createElement(React.Fragment, null,
        React.createElement(Layer, { width: sizes.checkBoxSize, height: sizes.checkBoxSize, borderWidth: 2, borderRadius: borderRadius.xs, borderColor: value ? colors.mainInteractiveColor : colors.placeholder, overflow: 'hidden', borderStyle: 'solid' },
            React.createElement(Layer, { backgroundColor: colors.mainInteractiveColor, initial: 'hidden', animate: value ? 'visible' : 'hidden', variants: checkVariants, width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center' },
                React.createElement(CheckIcon, { width: 16, height: 16, fill: colors.white }))),
        label && (React.createElement(Text, { marginLeft: spacings.xs, variant: 'normal' }, label))));
}
//# sourceMappingURL=Check.js.map