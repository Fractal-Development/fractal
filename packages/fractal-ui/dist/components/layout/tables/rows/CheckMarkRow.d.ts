import React from 'react';
import { BaseRowProps } from './BaseRow';
export interface CheckMarkRowProps extends BaseRowProps {
    title: string;
    isSelected: boolean;
}
declare const CheckMarkRow: React.ForwardRefExoticComponent<Pick<CheckMarkRowProps, "from" | "custom" | "onExitComplete" | "exitBeforeEnter" | "presenceAffectsLayout" | "currentVariant" | "animate" | "transition" | "children" | "style" | "onLayout" | "backgroundColor" | "width" | "maxWidth" | "minWidth" | "height" | "maxHeight" | "minHeight" | "padding" | "paddingTop" | "paddingBottom" | "paddingRight" | "paddingLeft" | "margin" | "marginTop" | "marginBottom" | "marginRight" | "marginLeft" | "flex" | "display" | "flexDirection" | "justifyContent" | "alignItems" | "alignSelf" | "alignContent" | "flexWrap" | "flexBasis" | "flexGrow" | "flexShrink" | "position" | "top" | "right" | "bottom" | "left" | "zIndex" | "opacity" | "overflow" | "borderRadius" | "borderTopLeftRadius" | "borderTopRightRadius" | "borderBottomLeftRadius" | "borderBottomRightRadius" | "borderWidth" | "borderTopWidth" | "borderBottomWidth" | "borderLeftWidth" | "borderRightWidth" | "borderColor" | "borderStyle" | "boxShadow" | "className" | "pointerEvents" | "cursor" | "boxSizing" | "focusable" | "exit" | "variants" | "title" | "addSeparator" | "isSelected" | "disablePadding"> & React.RefAttributes<unknown>>;
export { CheckMarkRow };
