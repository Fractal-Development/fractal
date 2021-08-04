import React from 'react';
import { SharedTabItemProps } from '../types/SharedTabItemProps';
export interface SimpleTabBarItemProps extends SharedTabItemProps {
    title?: string;
    children: (color: string, size: number) => JSX.Element;
    active?: boolean;
}
export declare const SimpleTabBarItem: React.MemoExoticComponent<({ active, title, children, tabIdentifier, onTabPress }: SimpleTabBarItemProps) => JSX.Element>;
