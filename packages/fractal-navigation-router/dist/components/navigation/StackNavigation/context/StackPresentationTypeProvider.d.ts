import React from 'react';
import { StackPresentationType } from '../../../../types';
export declare const StackPresentationTypeContext: React.Context<StackPresentationType | undefined>;
export interface StackPresentationTypeProviderProps {
    children: JSX.Element;
    stackPresentation: StackPresentationType | undefined;
}
export declare function StackPresentationTypeProvider({ children, stackPresentation }: StackPresentationTypeProviderProps): JSX.Element;
