import React from 'react';
import { LayerProps } from '@bma98/fractal-ui';
import { SharedTabItemProps } from '../types/SharedTabItemProps';
export interface SimpleTabBarItemProps extends SharedTabItemProps, LayerProps {
    title?: string;
    children: (color: string, size: number) => JSX.Element;
    active?: boolean;
}
export declare const SimpleTabBarItem: React.MemoExoticComponent<({ active, title, children, tabIdentifier, onTabPress, ...others }: SimpleTabBarItemProps) => JSX.Element>;
