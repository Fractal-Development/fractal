import React, { createContext, Dispatch, ReactNode, SetStateAction, useState } from 'react';
import { EdgeInsets } from '../../types';

export type NavigationBarInsetsContextType = [EdgeInsets, Dispatch<SetStateAction<EdgeInsets>>];

const cleanEdgeInsets: EdgeInsets = {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
};

export const NavigationBarInsetsContext = createContext<NavigationBarInsetsContextType>([
    cleanEdgeInsets,
    () => {
        return;
    }
]);

interface NavigationBarInsetsProviderProps {
    children: ReactNode;
}

export function NavigationBarInsetsProvider({ children }: NavigationBarInsetsProviderProps): JSX.Element {
    const handleState = useState(cleanEdgeInsets);
    return <NavigationBarInsetsContext.Provider value={handleState}>{children}</NavigationBarInsetsContext.Provider>;
}
