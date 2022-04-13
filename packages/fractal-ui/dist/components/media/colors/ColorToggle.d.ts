import React from 'react';
import { LayerProps } from '../../layout';
export interface ColorToggleProps extends LayerProps {
    onActiveChange?: (active: boolean, color: string) => void;
    backgroundColor: string;
    active?: boolean;
}
declare const ColorToggle: React.ForwardRefExoticComponent<Pick<ColorToggleProps, keyof ColorToggleProps> & React.RefAttributes<unknown>>;
export { ColorToggle };
