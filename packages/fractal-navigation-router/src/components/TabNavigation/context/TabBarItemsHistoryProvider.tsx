import React, { createContext, ReactNode, Dispatch, SetStateAction, useState } from 'react';

export type TabBarItemsHistoryContextType = [Map<string, string>, Dispatch<SetStateAction<Map<string, string>>>];

export const TabBarItemsHistoryContext = createContext<TabBarItemsHistoryContextType>([
    new Map(),
    () => {
        return;
    }
]);

interface TabBarItemsHistoryProviderProps {
    children: ReactNode;
}

export function TabBarItemsHistoryProvider({ children }: TabBarItemsHistoryProviderProps): JSX.Element {
    const handleState = useState(new Map());
    return <TabBarItemsHistoryContext.Provider value={handleState}>{children}</TabBarItemsHistoryContext.Provider>;
}
