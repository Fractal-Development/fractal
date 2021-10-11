import React from 'react';
import { LayerProps } from '../../layout';
export interface ColorPickerProps extends Partial<Omit<LayerProps, 'children'>> {
    colors: Array<string>;
    onColorChange: (color: string) => void;
    defaultValue?: string;
    value?: string;
}
declare const ColorPicker: React.ForwardRefExoticComponent<Pick<ColorPickerProps, "custom" | "onExitComplete" | "exitBeforeEnter" | "presenceAffectsLayout" | "animate" | "style" | "onLayout" | "backgroundColor" | "width" | "maxWidth" | "minWidth" | "height" | "maxHeight" | "minHeight" | "padding" | "paddingTop" | "paddingBottom" | "paddingRight" | "paddingLeft" | "margin" | "marginTop" | "marginBottom" | "marginRight" | "marginLeft" | "flex" | "display" | "flexDirection" | "justifyContent" | "alignItems" | "alignSelf" | "alignContent" | "flexWrap" | "flexBasis" | "flexGrow" | "flexShrink" | "position" | "top" | "right" | "bottom" | "left" | "zIndex" | "opacity" | "overflow" | "borderRadius" | "borderTopLeftRadius" | "borderTopRightRadius" | "borderBottomLeftRadius" | "borderBottomRightRadius" | "borderWidth" | "borderTopWidth" | "borderBottomWidth" | "borderLeftWidth" | "borderRightWidth" | "borderColor" | "borderStyle" | "boxShadow" | "className" | "pointerEvents" | "cursor" | "boxSizing" | "focusable" | "from" | "exit" | "transition" | "variants" | "currentVariant" | "defaultValue" | "value" | "colors" | "onColorChange"> & React.RefAttributes<unknown>>;
export { ColorPicker };
