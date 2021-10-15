import React from 'react';
import { ButtonVariant, LayerProps } from '@bma98/fractal-ui';
interface MessageInputProps extends Partial<Omit<LayerProps, 'children'>> {
    onSend: (message: string) => void;
    buttonVariant?: ButtonVariant;
    onChangeText?: (text: string) => void;
    placeholder?: string;
    useForegroundVariant?: boolean;
    inputRef?: any;
}
declare const MessageInput: React.ForwardRefExoticComponent<Pick<MessageInputProps, "className" | "height" | "style" | "width" | "cursor" | "display" | "focusable" | "from" | "opacity" | "overflow" | "pointerEvents" | "animate" | "custom" | "onExitComplete" | "exitBeforeEnter" | "presenceAffectsLayout" | "onLayout" | "backgroundColor" | "maxWidth" | "minWidth" | "maxHeight" | "minHeight" | "padding" | "paddingTop" | "paddingBottom" | "paddingRight" | "paddingLeft" | "margin" | "marginTop" | "marginBottom" | "marginRight" | "marginLeft" | "flex" | "flexDirection" | "justifyContent" | "alignItems" | "alignSelf" | "alignContent" | "flexWrap" | "flexBasis" | "flexGrow" | "flexShrink" | "position" | "top" | "right" | "bottom" | "left" | "zIndex" | "borderRadius" | "borderTopLeftRadius" | "borderTopRightRadius" | "borderBottomLeftRadius" | "borderBottomRightRadius" | "borderWidth" | "borderTopWidth" | "borderBottomWidth" | "borderLeftWidth" | "borderRightWidth" | "borderColor" | "borderStyle" | "boxShadow" | "boxSizing" | "exit" | "transition" | "variants" | "currentVariant" | "onSend" | "useForegroundVariant" | "buttonVariant" | "inputRef" | "onChangeText" | "placeholder"> & React.RefAttributes<unknown>>;
export { MessageInput };
