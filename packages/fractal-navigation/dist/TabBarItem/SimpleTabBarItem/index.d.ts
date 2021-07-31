import React from 'react';
export interface SimpleTabBarItemProps {
    title?: string;
    children: (color: string, size: number) => JSX.Element;
    active?: boolean;
}
export declare const SimpleTabBarItem: React.MemoExoticComponent<({ active, title, children }: SimpleTabBarItemProps) => JSX.Element>;
