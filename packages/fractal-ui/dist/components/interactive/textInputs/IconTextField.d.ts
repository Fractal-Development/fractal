import React from 'react';
import { TextFieldProps } from './BaseTextField/types';
import { LayerProps } from '../../layout';
export interface IconTextFieldProps extends Partial<Omit<LayerProps, 'children'>> {
    leftImage?: (color: string, size: number) => JSX.Element;
    rightImage?: (color: string, size: number) => JSX.Element;
    value?: string;
    onChangeText?: (text: string) => void;
    placeholder?: string;
    textFieldProps?: TextFieldProps;
    inputRef?: any;
}
declare const IconTextField: React.ForwardRefExoticComponent<Pick<IconTextFieldProps, "custom" | "onExitComplete" | "exitBeforeEnter" | "presenceAffectsLayout" | "animate" | "style" | "onLayout" | "backgroundColor" | "width" | "maxWidth" | "minWidth" | "height" | "maxHeight" | "minHeight" | "padding" | "paddingTop" | "paddingBottom" | "paddingRight" | "paddingLeft" | "margin" | "marginTop" | "marginBottom" | "marginRight" | "marginLeft" | "flex" | "display" | "flexDirection" | "justifyContent" | "alignItems" | "alignSelf" | "alignContent" | "flexWrap" | "flexBasis" | "flexGrow" | "flexShrink" | "position" | "top" | "right" | "bottom" | "left" | "zIndex" | "opacity" | "overflow" | "borderRadius" | "borderTopLeftRadius" | "borderTopRightRadius" | "borderBottomLeftRadius" | "borderBottomRightRadius" | "borderWidth" | "borderTopWidth" | "borderBottomWidth" | "borderLeftWidth" | "borderRightWidth" | "borderColor" | "borderStyle" | "boxShadow" | "className" | "pointerEvents" | "cursor" | "boxSizing" | "focusable" | "from" | "exit" | "transition" | "variants" | "currentVariant" | "placeholder" | "value" | "leftImage" | "rightImage" | "onChangeText" | "textFieldProps" | "inputRef"> & React.RefAttributes<unknown>>;
export { IconTextField };
