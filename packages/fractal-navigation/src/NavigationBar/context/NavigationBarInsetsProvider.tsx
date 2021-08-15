import React, { createContext, Dispatch, ReactNode, SetStateAction, useState } from 'react';
import { EdgeInsets } from '../../types';
import { cleanEdgeInsets } from './util/cleanEdgeInsets';

export type NavigationBarInsetsContextType = [EdgeInsets, Dispatch<SetStateAction<EdgeInsets>>];

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
