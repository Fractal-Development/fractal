import React from 'react';
import { BaseRowProps } from './BaseRow';
export interface SimpleRowProps extends BaseRowProps {
    title: string;
}
declare const SimpleRow: React.ForwardRefExoticComponent<Pick<SimpleRowProps, "className" | "height" | "style" | "width" | "cursor" | "display" | "from" | "opacity" | "overflow" | "pointerEvents" | "children" | "title" | "animate" | "borderRadius" | "backgroundColor" | "borderTopLeftRadius" | "borderTopRightRadius" | "borderBottomLeftRadius" | "borderBottomRightRadius" | "borderWidth" | "borderTopWidth" | "borderBottomWidth" | "borderLeftWidth" | "borderRightWidth" | "borderColor" | "borderStyle" | "maxHeight" | "minHeight" | "maxWidth" | "minWidth" | "padding" | "paddingBottom" | "paddingLeft" | "paddingRight" | "paddingTop" | "margin" | "marginBottom" | "marginLeft" | "marginRight" | "marginTop" | "flex" | "justifyContent" | "alignItems" | "flexDirection" | "alignSelf" | "alignContent" | "flexWrap" | "flexBasis" | "flexGrow" | "flexShrink" | "position" | "top" | "right" | "bottom" | "left" | "zIndex" | "boxShadow" | "boxSizing" | "custom" | "onExitComplete" | "exitBeforeEnter" | "presenceAffectsLayout" | "onLayout" | "exit" | "transition" | "variants" | "currentVariant" | "addSeparator"> & React.RefAttributes<unknown>>;
export { SimpleRow };
