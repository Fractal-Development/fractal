import React from 'react';
import { LayerProps } from '@bma98/fractal-ui';
interface MessageInputProps extends Partial<Omit<LayerProps, 'children'>> {
    onSend: (message: string) => void;
    onChangeText?: (text: string) => void;
    placeholder?: string;
    useForegroundVariant?: boolean;
}
declare const MessageInput: React.ForwardRefExoticComponent<Pick<MessageInputProps, "custom" | "onExitComplete" | "exitBeforeEnter" | "presenceAffectsLayout" | "left" | "right" | "style" | "onLayout" | "backgroundColor" | "width" | "maxWidth" | "minWidth" | "height" | "maxHeight" | "minHeight" | "padding" | "paddingTop" | "paddingBottom" | "paddingRight" | "paddingLeft" | "margin" | "marginTop" | "marginBottom" | "marginRight" | "marginLeft" | "flex" | "display" | "flexDirection" | "justifyContent" | "alignItems" | "alignSelf" | "alignContent" | "flexWrap" | "flexBasis" | "flexGrow" | "flexShrink" | "position" | "top" | "bottom" | "zIndex" | "opacity" | "overflow" | "borderRadius" | "borderTopLeftRadius" | "borderTopRightRadius" | "borderBottomLeftRadius" | "borderBottomRightRadius" | "borderWidth" | "borderTopWidth" | "borderBottomWidth" | "borderLeftWidth" | "borderRightWidth" | "borderColor" | "borderStyle" | "boxShadow" | "className" | "pointerEvents" | "cursor" | "boxSizing" | "focusable" | "from" | "animate" | "exit" | "transition" | "variants" | "currentVariant" | "onSend" | "useForegroundVariant" | "onChangeText" | "placeholder"> & React.RefAttributes<unknown>>;
export { MessageInput };
