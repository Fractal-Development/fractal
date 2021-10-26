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
declare const MessageInput: React.ForwardRefExoticComponent<Pick<MessageInputProps, "className" | "height" | "style" | "width" | "cursor" | "display" | "focusable" | "from" | "opacity" | "overflow" | "pointerEvents" | "animate" | "borderRadius" | "backgroundColor" | "borderTopLeftRadius" | "borderTopRightRadius" | "borderBottomLeftRadius" | "borderBottomRightRadius" | "borderWidth" | "borderTopWidth" | "borderBottomWidth" | "borderLeftWidth" | "borderRightWidth" | "borderColor" | "borderStyle" | "maxHeight" | "minHeight" | "maxWidth" | "minWidth" | "padding" | "paddingBottom" | "paddingLeft" | "paddingRight" | "paddingTop" | "margin" | "marginBottom" | "marginLeft" | "marginRight" | "marginTop" | "flex" | "justifyContent" | "alignItems" | "flexDirection" | "alignSelf" | "alignContent" | "flexWrap" | "flexBasis" | "flexGrow" | "flexShrink" | "position" | "top" | "right" | "bottom" | "left" | "zIndex" | "boxShadow" | "boxSizing" | "custom" | "onExitComplete" | "exitBeforeEnter" | "presenceAffectsLayout" | "onLayout" | "exit" | "transition" | "variants" | "currentVariant" | "placeholder" | "onSend" | "useForegroundVariant" | "buttonVariant" | "inputRef" | "onChangeText"> & React.RefAttributes<unknown>>;
export { MessageInput };
