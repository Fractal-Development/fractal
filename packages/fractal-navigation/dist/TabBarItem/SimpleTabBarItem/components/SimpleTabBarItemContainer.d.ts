import React, { ReactElement } from 'react';
export interface BasicTabBarItemProps {
    tabIdentifier: string;
    onTabPress?: (tabIdentifier: string) => void;
    icon: (iconSize: number) => ReactElement;
    children: Array<ReactElement> | ReactElement;
}
export declare const SimpleTabBarItemContainer: React.MemoExoticComponent<({ children, icon, onTabPress, tabIdentifier }: BasicTabBarItemProps) => ReactElement>;
