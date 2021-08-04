import React, { ReactElement } from 'react';
import { SharedTabItemProps } from '../../types/SharedTabItemProps';
export interface BasicTabBarItemProps extends SharedTabItemProps {
    icon: (iconSize: number) => ReactElement;
    children: Array<ReactElement> | ReactElement;
}
export declare const SimpleTabBarItemContainer: React.MemoExoticComponent<({ children, icon, ...others }: BasicTabBarItemProps) => ReactElement>;
