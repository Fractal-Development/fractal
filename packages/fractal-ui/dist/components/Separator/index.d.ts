import React from 'react';
import { LayerProps } from '../containers/Layer/types';
export interface SeparatorProps extends Omit<LayerProps, 'children'> {
    isAtBackgroundLevel?: boolean;
}
declare const Separator: React.ForwardRefExoticComponent<SeparatorProps & React.RefAttributes<unknown>>;
export { Separator };
