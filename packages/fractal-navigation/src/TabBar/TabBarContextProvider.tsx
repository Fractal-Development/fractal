import React, { ReactElement } from 'react';
import { TabBarInsetsProvider, SafeAreaProvider, TabBarIsHiddenProvider, TabBarPositionProvider } from './context';

export interface TabBarContextProviderProps {
    children: ReactElement | Array<ReactElement>;
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
