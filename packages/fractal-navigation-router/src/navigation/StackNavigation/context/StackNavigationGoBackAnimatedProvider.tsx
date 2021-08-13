import React, { createContext } from 'react';

type StackNavigationGoBackAnimatedContextType= () => void;

export const StackNavigationGoBackAnimatedContext = createContext<StackNavigationGoBackAnimatedContextType>(() => {
  return;
});

export interface StackNavigationGoBackAnimatedProviderProps {
  children: JSX.Element;
  goBackAnimated: () => void;
}

export function StackNavigationGoBackAnimatedProvider({ children, goBackAnimated }: StackNavigationGoBackAnimatedProviderProps): JSX.Element {
  return <StackNavigationGoBackAnimatedContext.Provider value={goBackAnimated}>{children}</StackNavigationGoBackAnimatedContext.Provider>;
}
