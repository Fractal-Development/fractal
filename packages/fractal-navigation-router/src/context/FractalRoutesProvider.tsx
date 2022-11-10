import React, { createContext } from 'react';

type FractalRoutesContextType = { [key: string]: string };

export const FractalRoutesContext = createContext<FractalRoutesContextType>({});

export interface FractalRoutesProviderProps {
    children: JSX.Element;
    routes: FractalRoutesContextType;
}

export function FractalRoutesProvider({ children, routes }: FractalRoutesProviderProps): JSX.Element {
    return <FractalRoutesContext.Provider value={routes}>{children}</FractalRoutesContext.Provider>;
}
