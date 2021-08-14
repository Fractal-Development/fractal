import React, { Dispatch, ReactNode, SetStateAction } from 'react';
import { EdgeInsets } from '../../types';
export declare type NavigationBarInsetsContextType = [EdgeInsets, Dispatch<SetStateAction<EdgeInsets>>];
export declare const NavigationBarInsetsContext: React.Context<NavigationBarInsetsContextType>;
interface NavigationBarInsetsProviderProps {
    children: ReactNode;
}
export declare function NavigationBarInsetsProvider({ children }: NavigationBarInsetsProviderProps): JSX.Element;
export {};
