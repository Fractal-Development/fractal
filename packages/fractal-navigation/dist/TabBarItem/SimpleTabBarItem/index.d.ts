import React from 'react';
export interface SimpleTabBarItemProps {
    tabIdentifier: string;
    onTabPress?: (tabIdentifier: string) => void;
    title?: string;
    children: (color: string, size: number) => JSX.Element;
    active?: boolean;
}
export declare const SimpleTabBarItem: React.MemoExoticComponent<({ active, title, children, tabIdentifier, onTabPress }: SimpleTabBarItemProps) => JSX.Element>;
