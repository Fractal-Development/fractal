import React, { Dispatch, ReactNode, SetStateAction } from 'react';
import { EdgeInsets } from 'react-native-safe-area-context';
export declare type TabBarInsetsContextType = [EdgeInsets, Dispatch<SetStateAction<EdgeInsets>>];
export declare const TabBarInsetsContext: React.Context<TabBarInsetsContextType>;
interface TabBarInsetsProviderProps {
    children: ReactNode;
}
export declare function TabBarInsetsProvider({ children }: TabBarInsetsProviderProps): JSX.Element;
export {};
