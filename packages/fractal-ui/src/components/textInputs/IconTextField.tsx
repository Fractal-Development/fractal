import React, { forwardRef } from 'react';
import { TextFieldProps } from './BaseTextField/types';
import { HorizontalLayer } from '../containers/HorizontalLayer';
import { LayerProps } from '../containers/Layer/types';
import { useTheme } from '../../context/hooks/useTheme';
import { Layer } from '../containers/Layer';
import { BaseTextField } from './BaseTextField';
import { getIconTextFieldAccessibilityProps } from './accessibility/getIconTextFieldAccessibilityProps';

export interface IconTextFieldProps extends Partial<Omit<LayerProps, 'children'>> {
    leftImage?: (color: string, size: number) => JSX.Element;
    rightImage?: (color: string, size: number) => JSX.Element;
    value?: string;
    onChangeText?: (text: string) => void;
    placeholder?: string;
    textFieldProps?: TextFieldProps;
    inputRef?: any;
}

const IconTextField = forwardRef(
    (
        { leftImage, rightImage, value, placeholder, onChangeText, textFieldProps, inputRef, ...others }: IconTextFieldProps,
        ref: any
    ): JSX.Element => {
        const { spacings, sizes, colors, borderRadius } = useTheme();
        const paddingLeft = leftImage != null ? spacings.xs : undefined;
        const paddingRight = rightImage != null ? spacings.xs : undefined;

        return (
            <HorizontalLayer
                ref={ref}
                paddingLeft={spacings.xs}
                paddingRight={spacings.xs}
                borderRadius={borderRadius.s}
                height={sizes.textFieldHeight}
                backgroundColor={colors.textField}
                justifyContent={'space-evenly'}
                alignItems={'center'}
                {...others}
            >
                {leftImage != null ? (
                    <Layer flexShrink={0} height={sizes.textFieldIconSize} width={sizes.textFieldIconSize}>
                        {leftImage(colors.placeholder, sizes.textFieldIconSize)}
                    </Layer>
                ) : null}
                <BaseTextField
                    ref={inputRef}
                    paddingLeft={paddingLeft}
                    paddingRight={paddingRight}
                    flex={1}
                    value={value}
                    color={colors.text}
                    placeholderTextColor={colors.placeholder}
                    fontSize={14}
                    onChangeText={onChangeText}
                    placeholder={placeholder}
                    {...getIconTextFieldAccessibilityProps()}
                    {...textFieldProps}
                />
                {rightImage != null ? (
                    <Layer flexShrink={0} height={sizes.textFieldIconSize} width={sizes.textFieldIconSize}>
                        {rightImage(colors.placeholder, sizes.textFieldIconSize)}
                    </Layer>
                ) : null}
            </HorizontalLayer>
        );
    }
);

IconTextField.displayName = 'IconTextField';

export { IconTextField };
