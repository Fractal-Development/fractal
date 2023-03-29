import React from 'react';
import { BaseButton, useTheme } from '@fractal-software/fractal-ui';
import { HeartIcon } from '../assets/HeartIcon';

export interface LoveToggleButtonProps {
    onPress?: () => void;
    size?: number;
    checked?: boolean;
    checkedColor?: string;
    uncheckedColor?: string;
}

export function LoveToggleButton({
    size = 24,
    onPress,
    checked,
    checkedColor: checkedColorProp,
    uncheckedColor: uncheckedColorProp
}: LoveToggleButtonProps): JSX.Element {
    const { colors } = useTheme();
    const checkedColor = checkedColorProp ?? colors.mainInteractiveColor;
    const uncheckedColor = uncheckedColorProp ?? colors.placeholder;

    return (
        <BaseButton width={size} height={size} alignItems='center' justifyContent='center' onPress={onPress}>
            <HeartIcon fill={checked ? checkedColor : uncheckedColor} width={size} height={size} />
        </BaseButton>
    );
}
