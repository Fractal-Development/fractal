import React, { forwardRef, ReactNode, useState } from 'react';
import { Text } from '../text';
import { useTheme } from '../../context/hooks/useTheme';
import { BaseButton } from './BaseButton';
import { AnimationProps, FractalSharedProps } from '../../sharedProps';
import { ButtonVariant } from './types/ButtonVariant';
import { getButtonAccessibilityProps } from './accessibility/getButtonAccessibilityProps';
import { useButtonColors } from './hooks/useButtonColors';
import { ActivityIndicator } from '../ActivityIndicator';

export interface ButtonProps extends FractalSharedProps, AnimationProps {
    style?: any;
    variant?: ButtonVariant;
    text?: string;
    addShadow?: boolean;
    pressedBackgroundColor?: string;
    children?: ReactNode | Array<ReactNode> | ((color: string) => ReactNode | Array<ReactNode>);
    onPress?: () => void;
    reduceColor?: boolean;
    ariaLabel?: string;
    disabled?: boolean;
    loading?: boolean;
}

const Button = forwardRef(
    (
        { variant = 'main', disabled, loading, ariaLabel, children, text, addShadow, onPress, reduceColor, ...others }: ButtonProps,
        ref: any
    ): JSX.Element => {
        const { borderRadius, sizes, shadows, spacings, colors } = useTheme();
        const [pressed, setPressed] = useState(false);
        const [backgroundColor, foregroundColor, pressedColor] = useButtonColors(variant, reduceColor);

        const handleButtonPress = (): void => {
            setPressed(true);
            onPress?.();
        };

        return (
            <BaseButton
                ref={ref}
                height={sizes.interactiveItemHeight}
                backgroundColor={backgroundColor}
                pressedBackgroundColor={pressedColor}
                borderRadius={borderRadius.m}
                boxShadow={addShadow ? shadows.mainShadow : undefined}
                justifyContent='center'
                alignItems='center'
                paddingRight={spacings.s}
                paddingLeft={spacings.s}
                onPress={handleButtonPress}
                opacity={disabled || loading ? 0.5 : 1}
                pointerEvents={disabled || loading ? 'none' : undefined}
                {...getButtonAccessibilityProps(pressed, false, text ?? ariaLabel)}
                {...others}
            >
                {loading ? (
                    <ActivityIndicator
                        color={colors.white}
                        height={sizes.loadingComponentHeightForButton}
                        width={sizes.loadingComponentHeightForButton}
                    />
                ) : (
                    <>
                        {typeof children === 'function' ? children?.(foregroundColor) : children}
                        {text != null ? (
                            <Text variant='button' color={foregroundColor}>
                                {text}
                            </Text>
                        ) : null}
                    </>
                )}
            </BaseButton>
        );
    }
);

Button.displayName = 'Button';

export { Button };
