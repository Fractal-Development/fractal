import React, { forwardRef } from 'react';
import { useTheme } from '../../context';
import { useControllableState } from '../../hooks/useControllableState';
import { Button, ButtonVariant } from '../buttons';
import { HorizontalLayer } from '../containers/HorizontalLayer';
import { IconTextField, IconTextFieldProps } from './IconTextField';
import { getButtonTextFieldAccessibilityProps } from './accessibility/getButtonTextFieldAccessibilityProps';
import { getButtonIconAccessibilityProps } from './accessibility/getButtonIconAccessibilityProps';
import { Layer } from '../containers';

export interface ButtonTextFieldProps extends IconTextFieldProps {
    onSubmitEditing?: (text: string) => void;
    onButtonPress?: (text: string) => void;
    buttonImage?: (color: string, size: number) => JSX.Element;
    buttonVariant?: ButtonVariant;
    buttonText?: string;
    buttonAriaLabel?: string;
    showButton?: boolean;
    useForegroundVariant?: boolean;
}

const ButtonTextField = forwardRef(
    (
        {
            value,
            buttonImage,
            onChangeText,
            onButtonPress,
            buttonVariant = 'main',
            buttonText,
            showButton = true,
            buttonAriaLabel,
            leftImage,
            rightImage,
            textFieldProps,
            inputRef,
            placeholder,
            onSubmitEditing,
            useForegroundVariant,
            ...layerProps
        }: ButtonTextFieldProps,
        ref: any
    ): JSX.Element => {
        const { colors, sizes, spacings } = useTheme();
        const [text, setText] = useControllableState(value, '', onChangeText);

        const handleChangeText = (text: string) => {
            setText(text);
        };

        const handlePress = () => {
            onButtonPress?.(text);
        };

        const handleSubmitEditing = () => {
            onSubmitEditing?.(text);
        };

        return (
            <HorizontalLayer ref={ref} alignItems={'center'} height={sizes.textFieldHeight} {...layerProps}>
                <IconTextField
                    value={text}
                    flex={1}
                    placeholder={placeholder}
                    leftImage={leftImage}
                    rightImage={rightImage}
                    textFieldProps={{ ...textFieldProps, onSubmitEditing: textFieldProps?.onSubmitEditing ?? handleSubmitEditing }}
                    inputRef={inputRef}
                    paddingLeft={spacings.xs}
                    onChangeText={handleChangeText}
                    backgroundColor={useForegroundVariant ? colors.foreground : colors.background}
                    {...getButtonTextFieldAccessibilityProps(buttonAriaLabel)}
                />
                <Layer marginLeft={showButton ? spacings.m : undefined}>
                    {showButton ? (
                        <Button
                            ariaLabel={buttonAriaLabel}
                            variant={buttonVariant}
                            onPress={handlePress}
                            text={buttonText}
                            {...getButtonIconAccessibilityProps(buttonAriaLabel)}
                        >
                            {buttonText == null && buttonImage ? buttonImage(colors.white, 22) : null}
                        </Button>
                    ) : null}
                </Layer>
            </HorizontalLayer>
        );
    }
);

ButtonTextField.displayName = 'ButtonTextField';

export { ButtonTextField };
