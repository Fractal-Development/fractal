import React, { forwardRef } from 'react';
import { Text } from '../text';
import { AnimationProps, FractalSharedProps } from '../../sharedProps';
import { TextProps } from '../text/BaseText/types';
import { useTheme } from '../../context/hooks/useTheme';
import { ButtonVariant } from './types/ButtonVariant';
import { TouchableOpacity } from './TouchableOpacity';
import { getTextButtonAccessibilityProps } from './accessibility/getTextButtonAccessibilityProps';

export interface TextButtonProps extends FractalSharedProps, AnimationProps {
    variant: ButtonVariant;
    children?: string;
    textProps?: Omit<TextProps, 'children'>;
    leftIcon?: (color: string) => JSX.Element;
    rightIcon?: (color: string) => JSX.Element;
    style?: any;
    onPress?: () => void;
    disabled?: boolean;
}

const TextButton = forwardRef(
    ({ variant, children, leftIcon, rightIcon, textProps, disabled, ...others }: TextButtonProps, ref: any): JSX.Element => {
        const { colors } = useTheme();
        const colorName = `${variant}InteractiveColor`;
        const color = colors[colorName];

        return (
            <TouchableOpacity
                ref={ref}
                opacity={disabled ? 0.5 : 1}
                pointerEvents={disabled ? 'none' : undefined}
                {...others}
                {...getTextButtonAccessibilityProps(children)}
            >
                {leftIcon && leftIcon(color)}
                {children && (
                    <Text fontWeight={500} variant={'textButton'} color={color} {...textProps}>
                        {children}
                    </Text>
                )}
                {rightIcon && rightIcon(color)}
            </TouchableOpacity>
        );
    }
);

TextButton.displayName = 'TextButton';

export { TextButton };
