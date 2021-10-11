import React from 'react';
import { useTheme } from '../../../../context';
import { Pressable } from '../../buttons';
import { Layer } from '../../../layout';
import { getSwitchAccessibilityProps } from '../accessibility/getSwitchAccessibilityProps';
const styleVariants = {
    start: { translateX: 0, translateY: 0 },
    end: { translateX: 16, translateY: 0 }
};
export function BaseSwitch({ value, onValueChange }) {
    const { colors, shadows } = useTheme();
    const onPress = () => {
        if (onValueChange) {
            onValueChange(!value);
        }
    };
    const backgroundVariants = {
        active: { backgroundColor: colors.mainInteractiveColor },
        inactive: { backgroundColor: colors.placeholder }
    };
    return (React.createElement(Pressable, Object.assign({ flexDirection: "row", height: 24, width: 40, borderRadius: 12, paddingLeft: 2, paddingRight: 2, onPress: onPress, alignItems: 'center', 
        // from={'inactive'}
        currentVariant: value ? 'active' : 'inactive', variants: backgroundVariants }, getSwitchAccessibilityProps(value)),
        React.createElement(Layer
        // from={'start'}
        , { 
            // from={'start'}
            currentVariant: value ? 'end' : 'start', variants: styleVariants, height: 20, width: 20, borderRadius: 10, backgroundColor: colors.white, boxShadow: shadows.mainShadow })));
}
//# sourceMappingURL=index.js.map