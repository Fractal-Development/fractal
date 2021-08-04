import React, { ReactElement } from 'react';
import { LayerProps } from '@bma98/fractal-ui';
import { SharedTabItemProps } from '../../types/SharedTabItemProps';
export interface BasicTabBarItemProps extends SharedTabItemProps, Omit<LayerProps, 'children'> {
    icon: (iconSize: number) => ReactElement;
    children: Array<ReactElement> | ReactElement;
}
export declare const SimpleTabBarItemContainer: React.MemoExoticComponent<({ children, icon, tabIdentifier, onTabPress, ...others }: BasicTabBarItemProps) => ReactElement>;
