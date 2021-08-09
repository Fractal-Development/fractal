import React, { ReactElement, ReactNode } from 'react';
import { TabBarInsetsProvider, SafeAreaProvider, TabBarIsHiddenProvider, TabBarPositionProvider } from './context';

export interface TabBarContextProviderProps {
    children: ReactNode;
}

export function TabBarContextProvider({ children }: TabBarContextProviderProps): ReactElement {
    return (
        <SafeAreaProvider>
            <TabBarPositionProvider>
                <TabBarIsHiddenProvider>
                    <TabBarInsetsProvider>{children}</TabBarInsetsProvider>
                </TabBarIsHiddenProvider>
            </TabBarPositionProvider>
        </SafeAreaProvider>
    );
}
