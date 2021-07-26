import React, { createContext, Dispatch, ReactNode, SetStateAction, useState } from 'react';
import { EdgeInsets } from 'react-native-safe-area-context';

export type TabBarInsetsContextType = [EdgeInsets, Dispatch<SetStateAction<EdgeInsets>>];

const cleanEdgeInsets: EdgeInsets = {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
};

export const TabBarInsetsContext = createContext<TabBarInsetsContextType>([
    cleanEdgeInsets,
    () => {
        return;
    }
]);

interface TabBarInsetsProviderProps {
    children: ReactNode;
}

export function TabBarInsetsProvider({ children }: TabBarInsetsProviderProps): JSX.Element {
    const handleState = useState(cleanEdgeInsets);
    return <TabBarInsetsContext.Provider value={handleState}>{children}</TabBarInsetsContext.Provider>;
}
