import React, { ReactNode, forwardRef, useState } from 'react';
import { useTheme } from '../../../context';
import { AnimationProps, FractalSharedStyleProps } from '../../../sharedProps';
import { BaseButton } from './BaseButton';
import { ButtonVariant } from './types';
import { useToggleButtonColors } from './hooks/useToggleButtonColors';
import { getButtonAccessibilityProps } from './accessibility/getButtonAccessibilityProps';
import { useControllableState } from '../../../hooks/useControllableState';

export interface ToggleButtonProps extends FractalSharedStyleProps, AnimationProps {
    variant: ButtonVariant;
    active?: boolean;
    useGrayVariant?: boolean;
    children?: (color: string) => ReactNode | Array<ReactNode>;
    style?: any;
    onPress?: () => void;
    onActiveChange?: (active: boolean) => void;
    disabled?: boolean;
}

const ToggleButton = forwardRef(
    (
        { active: activeProp, disabled, variant, children, onPress, onActiveChange, useGrayVariant, ...others }: ToggleButtonProps,
        ref: any
    ): JSX.Element => {
        const { colors, sizes, borderRadius } = useTheme();
        const [active, setActive] = useControllableState(activeProp, false, onActiveChange);
        const [pressed, setPressed] = useState(false);
        const [backgroundColor, foregroundColor, pressedColor] = useToggleButtonColors(variant, active, useGrayVariant);

        const handleButtonPress = (): void => {
            setPressed(true);
            setActive(!active);
            onPress?.();
        };

        return (
            <BaseButton
                ref={ref}
                height={sizes.interactiveItemHeight}
                width='100%'
                pressedBackgroundColor={pressedColor}
                borderRadius={borderRadius.m}
                justifyContent='center'
                alignItems='center'
                onPress={handleButtonPress}
                opacity={disabled ? 0.5 : 1}
                pointerEvents={disabled ? 'none' : undefined}
                variants={{
                    active: {
                        backgroundColor
                    },
                    from: {
                        backgroundColor: colors.background
                    }
                }}
                currentVariant={active ? 'active' : 'from'}
                {...getButtonAccessibilityProps(pressed, false, 'Toggle')}
                {...others}
            >
                {children?.(foregroundColor)}
            </BaseButton>
        );
    }
);

ToggleButton.displayName = 'ToggleButton';

export { ToggleButton };
