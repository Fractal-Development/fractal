import React from 'react';
import { Switch } from 'react-native';
import { useTheme } from '../../../context/hooks/useTheme';
import { BaseSwitchProps } from '../types';

export function BaseSwitch({ value, onValueChange }: BaseSwitchProps): JSX.Element {
    const { colors } = useTheme();

    return (
        <Switch
            trackColor={{ false: colors.placeholder, true: colors.mainInteractiveColor }}
            thumbColor={colors.white}
            value={value}
            onValueChange={onValueChange}
            ios_backgroundColor={colors.placeholder}
        />
    );
}
