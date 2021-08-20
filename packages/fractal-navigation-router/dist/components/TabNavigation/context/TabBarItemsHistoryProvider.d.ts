import React, { ReactNode, Dispatch, SetStateAction } from 'react';
export declare type TabBarItemsHistoryContextType = [Map<string, string>, Dispatch<SetStateAction<Map<string, string>>>];
export declare const TabBarItemsHistoryContext: React.Context<TabBarItemsHistoryContextType>;
interface TabBarItemsHistoryProviderProps {
    children: ReactNode;
}
export declare function TabBarItemsHistoryProvider({ children }: TabBarItemsHistoryProviderProps): JSX.Element;
export {};
