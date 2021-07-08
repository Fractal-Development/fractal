import React from 'react';
import { ButtonVariant } from '../buttons';
import { IconTextFieldProps } from './IconTextField';
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
declare const ButtonTextField: React.ForwardRefExoticComponent<Pick<ButtonTextFieldProps, "className" | "height" | "style" | "width" | "cursor" | "display" | "from" | "opacity" | "overflow" | "pointerEvents" | "animate" | "placeholder" | "value" | "borderRadius" | "backgroundColor" | "borderTopLeftRadius" | "borderTopRightRadius" | "borderBottomLeftRadius" | "borderBottomRightRadius" | "borderWidth" | "borderTopWidth" | "borderBottomWidth" | "borderLeftWidth" | "borderRightWidth" | "borderColor" | "borderStyle" | "maxHeight" | "minHeight" | "maxWidth" | "minWidth" | "padding" | "paddingBottom" | "paddingLeft" | "paddingRight" | "paddingTop" | "margin" | "marginBottom" | "marginLeft" | "marginRight" | "marginTop" | "flex" | "justifyContent" | "alignItems" | "flexDirection" | "alignSelf" | "alignContent" | "flexWrap" | "flexBasis" | "flexGrow" | "flexShrink" | "position" | "top" | "right" | "bottom" | "left" | "zIndex" | "boxShadow" | "boxSizing" | "custom" | "onExitComplete" | "exitBeforeEnter" | "presenceAffectsLayout" | "onLayout" | "exit" | "transition" | "variants" | "currentVariant" | "onButtonPress" | "onChangeText" | "onSubmitEditing" | "leftImage" | "rightImage" | "textFieldProps" | "inputRef" | "buttonImage" | "buttonVariant" | "buttonText" | "showButton" | "buttonAriaLabel" | "useForegroundVariant"> & React.RefAttributes<unknown>>;
export { ButtonTextField };
