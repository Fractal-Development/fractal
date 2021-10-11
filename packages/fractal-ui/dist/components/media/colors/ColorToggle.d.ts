import React from 'react';
import { LayerProps } from '../../layout';
export interface ColorToggleProps extends LayerProps {
    onActiveChange?: (active: boolean, color: string) => void;
    backgroundColor: string;
    active?: boolean;
}
declare const ColorToggle: React.ForwardRefExoticComponent<Pick<ColorToggleProps, "custom" | "onExitComplete" | "exitBeforeEnter" | "presenceAffectsLayout" | "animate" | "children" | "style" | "onLayout" | "backgroundColor" | "width" | "maxWidth" | "minWidth" | "height" | "maxHeight" | "minHeight" | "padding" | "paddingTop" | "paddingBottom" | "paddingRight" | "paddingLeft" | "margin" | "marginTop" | "marginBottom" | "marginRight" | "marginLeft" | "flex" | "display" | "flexDirection" | "justifyContent" | "alignItems" | "alignSelf" | "alignContent" | "flexWrap" | "flexBasis" | "flexGrow" | "flexShrink" | "position" | "top" | "right" | "bottom" | "left" | "zIndex" | "opacity" | "overflow" | "borderRadius" | "borderTopLeftRadius" | "borderTopRightRadius" | "borderBottomLeftRadius" | "borderBottomRightRadius" | "borderWidth" | "borderTopWidth" | "borderBottomWidth" | "borderLeftWidth" | "borderRightWidth" | "borderColor" | "borderStyle" | "boxShadow" | "className" | "pointerEvents" | "cursor" | "boxSizing" | "focusable" | "from" | "exit" | "transition" | "variants" | "currentVariant" | "active" | "onActiveChange"> & React.RefAttributes<unknown>>;
export { ColorToggle };
