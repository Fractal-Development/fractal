import React from 'react';
import { Switch } from 'react-native';
import { useTheme } from '../../../context/hooks/useTheme';
export function BaseSwitch({ value, onValueChange }) {
    const { colors } = useTheme();
    return (React.createElement(Switch, { trackColor: { false: colors.placeholder, true: colors.mainInteractiveColor }, thumbColor: colors.white, value: value, onValueChange: onValueChange, ios_backgroundColor: colors.placeholder }));
}
//# sourceMappingURL=index.native.js.map