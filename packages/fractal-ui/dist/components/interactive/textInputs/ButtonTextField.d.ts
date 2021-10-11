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
declare const ButtonTextField: React.ForwardRefExoticComponent<Pick<ButtonTextFieldProps, "custom" | "onExitComplete" | "exitBeforeEnter" | "presenceAffectsLayout" | "animate" | "style" | "onLayout" | "backgroundColor" | "width" | "maxWidth" | "minWidth" | "height" | "maxHeight" | "minHeight" | "padding" | "paddingTop" | "paddingBottom" | "paddingRight" | "paddingLeft" | "margin" | "marginTop" | "marginBottom" | "marginRight" | "marginLeft" | "flex" | "display" | "flexDirection" | "justifyContent" | "alignItems" | "alignSelf" | "alignContent" | "flexWrap" | "flexBasis" | "flexGrow" | "flexShrink" | "position" | "top" | "right" | "bottom" | "left" | "zIndex" | "opacity" | "overflow" | "borderRadius" | "borderTopLeftRadius" | "borderTopRightRadius" | "borderBottomLeftRadius" | "borderBottomRightRadius" | "borderWidth" | "borderTopWidth" | "borderBottomWidth" | "borderLeftWidth" | "borderRightWidth" | "borderColor" | "borderStyle" | "boxShadow" | "className" | "pointerEvents" | "cursor" | "boxSizing" | "focusable" | "from" | "exit" | "transition" | "variants" | "currentVariant" | "placeholder" | "value" | "onSubmitEditing" | "onButtonPress" | "buttonImage" | "buttonVariant" | "buttonText" | "buttonAriaLabel" | "showButton" | "useForegroundVariant" | "leftImage" | "rightImage" | "onChangeText" | "textFieldProps" | "inputRef"> & React.RefAttributes<unknown>>;
export { ButtonTextField };
