import React, { createContext, Dispatch, ReactNode, SetStateAction, useState } from 'react';

export type TabBarIsHiddenContextType = [boolean, Dispatch<SetStateAction<boolean>>];

export const TabBarIsHiddenContext = createContext<TabBarIsHiddenContextType>([
    false,
    () => {
        return;
    }
]);

interface TabBarIsHiddenProviderProps {
    children: ReactNode;
}

export function TabBarIsHiddenProvider({ children }: TabBarIsHiddenProviderProps): JSX.Element {
    const handleState = useState(false);
    return <TabBarIsHiddenContext.Provider value={handleState}>{children}</TabBarIsHiddenContext.Provider>;
}
