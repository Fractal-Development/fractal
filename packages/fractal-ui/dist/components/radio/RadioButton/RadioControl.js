import React from 'react';
import { useTheme } from '../../../context/hooks/useTheme';
import { Layer } from '../../containers/Layer';
import { Text } from '../../text';
const circleVariants = {
    active: { scale: 1 },
    inactive: { scale: 0 }
};
export function RadioControl({ active, label }) {
    const { colors, sizes, spacings } = useTheme();
    return (React.createElement(React.Fragment, null,
        React.createElement(Layer, { width: sizes.radioButtonSize, height: sizes.radioButtonSize, display: 'flex', flexShrink: 0, borderRadius: sizes.radioButtonSize / 2, borderWidth: 2, alignItems: 'center', borderStyle: 'solid', justifyContent: 'center', borderColor: active ? colors.mainInteractiveColor : colors.placeholder },
            React.createElement(Layer, { width: 10, height: 10, borderRadius: 10, backgroundColor: colors.mainInteractiveColor, initial: 'inactive', animate: active ? 'active' : 'inactive', variants: circleVariants })),
        label && (React.createElement(Text, { marginLeft: spacings.xs, variant: 'normal' }, label))));
}
//# sourceMappingURL=RadioControl.js.map