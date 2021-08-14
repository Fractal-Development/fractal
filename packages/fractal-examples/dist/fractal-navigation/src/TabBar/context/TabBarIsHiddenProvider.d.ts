import React, { Dispatch, ReactNode, SetStateAction } from 'react';
export declare type TabBarIsHiddenContextType = [boolean, Dispatch<SetStateAction<boolean>>];
export declare const TabBarIsHiddenContext: React.Context<TabBarIsHiddenContextType>;
interface TabBarIsHiddenProviderProps {
    children: ReactNode;
}
export declare function TabBarIsHiddenProvider({ children }: TabBarIsHiddenProviderProps): JSX.Element;
export {};
