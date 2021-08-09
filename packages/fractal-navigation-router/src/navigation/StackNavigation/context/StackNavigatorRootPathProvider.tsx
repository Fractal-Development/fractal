import React, { createContext, ReactNode } from 'react';

export const StackNavigatorRootPathContext = createContext<string>('/');

interface StackNavigatorRootPathProviderProps {
    children: ReactNode;
    initialValue: string;
}

export function StackNavigatorRootPathProvider({ children, initialValue }: StackNavigatorRootPathProviderProps): JSX.Element {
    return <StackNavigatorRootPathContext.Provider value={initialValue}>{children}</StackNavigatorRootPathContext.Provider>;
}
