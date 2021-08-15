import React, { createContext } from 'react';
import { StackPresentationType } from '../../../../types';

export const StackPresentationTypeContext = createContext<StackPresentationType | undefined>(undefined);

export interface StackPresentationTypeProviderProps {
    children: JSX.Element;
    stackPresentation: StackPresentationType | undefined;
}

export function StackPresentationTypeProvider({ children, stackPresentation }: StackPresentationTypeProviderProps): JSX.Element {
    return <StackPresentationTypeContext.Provider value={stackPresentation}>{children}</StackPresentationTypeContext.Provider>;
}
