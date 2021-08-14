import React, { ReactNode } from 'react';
export declare const StackNavigatorRootPathContext: React.Context<string>;
interface StackNavigatorRootPathProviderProps {
    children: ReactNode;
    initialValue: string;
}
export declare function StackNavigatorRootPathProvider({ children, initialValue }: StackNavigatorRootPathProviderProps): JSX.Element;
export {};
