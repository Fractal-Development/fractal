import React, { ReactElement } from 'react';
interface NavigationBarBackgroundProps {
    children: ReactElement | Array<ReactElement>;
    backgroundColor?: string;
}
export declare const NavigationBarBackground: React.MemoExoticComponent<({ children, backgroundColor }: NavigationBarBackgroundProps) => ReactElement>;
export {};
