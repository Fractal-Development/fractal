import React, { ReactElement, ReactNode } from 'react';
import { SafeAreaProvider } from './SafeAreaProvider';
import { TabBarInsetsProvider } from './TabBarInsetsProvider';
import { TabBarIsHiddenProvider } from './TabBarIsHiddenProvider';
import { TabBarPositionProvider } from './TabBarPositionProvider';

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
