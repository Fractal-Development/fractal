import React, { createContext } from 'react';

type StackNavigationGoBackAnimatedContextType = (() => void) | undefined;

export const StackNavigationGoBackAnimatedContext = createContext<StackNavigationGoBackAnimatedContextType>(undefined);

export interface StackNavigationGoBackAnimatedProviderProps {
    children: JSX.Element;
    goBackAnimated?: () => void;
}

export function StackNavigationGoBackAnimatedProvider({
    children,
    goBackAnimated
}: StackNavigationGoBackAnimatedProviderProps): JSX.Element {
    return <StackNavigationGoBackAnimatedContext.Provider value={goBackAnimated}>{children}</StackNavigationGoBackAnimatedContext.Provider>;
}
