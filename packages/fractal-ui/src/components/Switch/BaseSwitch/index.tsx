import React from 'react';
import { useTheme } from '../../../context/hooks/useTheme';
import { Pressable } from '../../buttons/Pressable';
import { Layer } from '../../containers/Layer';
import { BaseSwitchProps } from '../types';
import { getSwitchAccessibilityProps } from '../accessibility/getSwitchAccessibilityProps';

const styleVariants = {
    start: { translateX: 0, translateY: 0 },
    end: { translateX: 16, translateY: 0 }
};

export function BaseSwitch({ value, onValueChange }: BaseSwitchProps): JSX.Element {
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

    return (
        <Pressable
            flexDirection={'row'}
            height={24}
            width={40}
            borderRadius={12}
            paddingLeft={2}
            paddingRight={2}
            onPress={onPress}
            alignItems='center'
            initial={'inactive'}
            animate={value ? 'active' : 'inactive'}
            variants={backgroundVariants}
            {...getSwitchAccessibilityProps(value)}
        >
            <Layer
                initial={'start'}
                animate={value ? 'end' : 'start'}
                variants={styleVariants}
                height={20}
                width={20}
                borderRadius={10}
                backgroundColor={colors.white}
                boxShadow={shadows.mainShadow}
            />
        </Pressable>
    );
}
