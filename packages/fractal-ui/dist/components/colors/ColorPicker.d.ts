import React from 'react';
import { LayerProps } from '../containers/Layer/types';
export interface ColorPickerProps extends Partial<Omit<LayerProps, 'children'>> {
    colors: Array<string>;
    onColorChange: (color: string) => void;
    defaultValue?: string;
    value?: string;
}
declare const ColorPicker: React.ForwardRefExoticComponent<Pick<ColorPickerProps, "className" | "height" | "style" | "width" | "cursor" | "display" | "from" | "opacity" | "overflow" | "pointerEvents" | "animate" | "value" | "colors" | "borderRadius" | "backgroundColor" | "borderTopLeftRadius" | "borderTopRightRadius" | "borderBottomLeftRadius" | "borderBottomRightRadius" | "borderWidth" | "borderTopWidth" | "borderBottomWidth" | "borderLeftWidth" | "borderRightWidth" | "borderColor" | "borderStyle" | "maxHeight" | "minHeight" | "maxWidth" | "minWidth" | "padding" | "paddingBottom" | "paddingLeft" | "paddingRight" | "paddingTop" | "margin" | "marginBottom" | "marginLeft" | "marginRight" | "marginTop" | "flex" | "justifyContent" | "alignItems" | "flexDirection" | "alignSelf" | "alignContent" | "flexWrap" | "flexBasis" | "flexGrow" | "flexShrink" | "position" | "top" | "right" | "bottom" | "left" | "zIndex" | "boxShadow" | "boxSizing" | "custom" | "onExitComplete" | "exitBeforeEnter" | "presenceAffectsLayout" | "onLayout" | "exit" | "transition" | "variants" | "currentVariant" | "defaultValue" | "onColorChange"> & React.RefAttributes<unknown>>;
export { ColorPicker };
