import React, { ReactElement } from 'react';
export interface BasicTabBarItemProps {
    icon: (iconSize: number) => ReactElement;
    children: Array<ReactElement> | ReactElement;
}
export declare const SimpleTabBarItemContainer: React.MemoExoticComponent<({ children, icon }: BasicTabBarItemProps) => ReactElement>;
