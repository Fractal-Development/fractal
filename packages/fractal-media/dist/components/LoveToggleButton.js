import React from 'react';
import { BaseButton, useTheme } from '@bma98/fractal-ui';
import { HeartIcon } from '../assets/HeartIcon';
export function LoveToggleButton({ size = 24, onPress, checked, checkedColor: checkedColorProp, uncheckedColor: uncheckedColorProp }) {
    const { colors } = useTheme();
    const checkedColor = checkedColorProp !== null && checkedColorProp !== void 0 ? checkedColorProp : colors.mainInteractiveColor;
    const uncheckedColor = uncheckedColorProp !== null && uncheckedColorProp !== void 0 ? uncheckedColorProp : colors.placeholder;
    return (React.createElement(BaseButton, { width: size, height: size, alignItems: 'center', justifyContent: 'center', onPress: onPress },
        React.createElement(HeartIcon, { fill: checked ? checkedColor : uncheckedColor, width: size, height: size })));
}
//# sourceMappingURL=LoveToggleButton.js.map