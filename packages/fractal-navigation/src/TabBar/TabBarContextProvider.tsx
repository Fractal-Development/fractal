import React, { ReactElement } from 'react';
import { TabBarPositionProvider } from './context/TabBarPositionProvider';
import { TabBarIsHiddenProvider } from './context/TabBarIsHiddenProvider';
import { TabBarInsetsProvider } from './context/TabBarInsetsProvider';

export interface TabBarContextProviderProps {
    children: ReactElement;
}

export function TabBarContextProvider({ children }: TabBarContextProviderProps): ReactElement {
    return (
        <TabBarPositionProvider>
            <TabBarIsHiddenProvider>
                <TabBarInsetsProvider>{children}</TabBarInsetsProvider>
            </TabBarIsHiddenProvider>
        </TabBarPositionProvider>
    );
}
