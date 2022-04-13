import React from 'react';
import { LayerProps } from '../../layout';
export interface ColorPickerProps extends Partial<Omit<LayerProps, 'children'>> {
    colors: Array<string>;
    onColorChange: (color: string) => void;
    defaultValue?: string;
    value?: string;
}
declare const ColorPicker: React.ForwardRefExoticComponent<Pick<ColorPickerProps, keyof ColorPickerProps> & React.RefAttributes<unknown>>;
export { ColorPicker };
