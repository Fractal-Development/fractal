import React from 'react';
import { LayerProps } from '../Layer/types';
export interface SeparatorProps extends Omit<LayerProps, 'children'> {
    isAtBackgroundLevel?: boolean;
}
declare const Separator: React.ForwardRefExoticComponent<Pick<SeparatorProps, "custom" | "onExitComplete" | "exitBeforeEnter" | "presenceAffectsLayout" | "animate" | "style" | "onLayout" | "backgroundColor" | "width" | "maxWidth" | "minWidth" | "height" | "maxHeight" | "minHeight" | "padding" | "paddingTop" | "paddingBottom" | "paddingRight" | "paddingLeft" | "margin" | "marginTop" | "marginBottom" | "marginRight" | "marginLeft" | "flex" | "display" | "flexDirection" | "justifyContent" | "alignItems" | "alignSelf" | "alignContent" | "flexWrap" | "flexBasis" | "flexGrow" | "flexShrink" | "position" | "top" | "right" | "bottom" | "left" | "zIndex" | "opacity" | "overflow" | "borderRadius" | "borderTopLeftRadius" | "borderTopRightRadius" | "borderBottomLeftRadius" | "borderBottomRightRadius" | "borderWidth" | "borderTopWidth" | "borderBottomWidth" | "borderLeftWidth" | "borderRightWidth" | "borderColor" | "borderStyle" | "boxShadow" | "className" | "pointerEvents" | "cursor" | "boxSizing" | "focusable" | "from" | "exit" | "transition" | "variants" | "currentVariant" | "isAtBackgroundLevel"> & React.RefAttributes<unknown>>;
export { Separator };
