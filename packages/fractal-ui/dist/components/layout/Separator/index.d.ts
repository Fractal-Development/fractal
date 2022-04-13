import React from 'react';
import { LayerProps } from '../Layer/types';
export interface SeparatorProps extends Omit<LayerProps, 'children'> {
    isAtBackgroundLevel?: boolean;
}
declare const Separator: React.ForwardRefExoticComponent<Pick<SeparatorProps, keyof SeparatorProps> & React.RefAttributes<unknown>>;
export { Separator };
