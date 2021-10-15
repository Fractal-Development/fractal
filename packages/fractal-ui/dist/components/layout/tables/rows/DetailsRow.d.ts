import React from 'react';
import { BaseRowProps } from './BaseRow';
export interface DetailsRowProps extends BaseRowProps {
    title: string;
    details: string;
}
declare const DetailsRow: React.ForwardRefExoticComponent<Pick<DetailsRowProps, "className" | "height" | "style" | "width" | "cursor" | "display" | "focusable" | "from" | "opacity" | "overflow" | "pointerEvents" | "children" | "details" | "title" | "animate" | "borderRadius" | "backgroundColor" | "borderTopLeftRadius" | "borderTopRightRadius" | "borderBottomLeftRadius" | "borderBottomRightRadius" | "borderWidth" | "borderTopWidth" | "borderBottomWidth" | "borderLeftWidth" | "borderRightWidth" | "borderColor" | "borderStyle" | "maxHeight" | "minHeight" | "maxWidth" | "minWidth" | "padding" | "paddingBottom" | "paddingLeft" | "paddingRight" | "paddingTop" | "margin" | "marginBottom" | "marginLeft" | "marginRight" | "marginTop" | "flex" | "justifyContent" | "alignItems" | "flexDirection" | "alignSelf" | "alignContent" | "flexWrap" | "flexBasis" | "flexGrow" | "flexShrink" | "position" | "top" | "right" | "bottom" | "left" | "zIndex" | "boxShadow" | "boxSizing" | "custom" | "onExitComplete" | "exitBeforeEnter" | "presenceAffectsLayout" | "onLayout" | "exit" | "transition" | "variants" | "currentVariant" | "addSeparator" | "disablePadding"> & React.RefAttributes<unknown>>;
export { DetailsRow };
