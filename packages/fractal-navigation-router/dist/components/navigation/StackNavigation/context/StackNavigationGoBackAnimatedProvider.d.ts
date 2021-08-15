import React from 'react';
declare type StackNavigationGoBackAnimatedContextType = (() => void) | undefined;
export declare const StackNavigationGoBackAnimatedContext: React.Context<StackNavigationGoBackAnimatedContextType>;
export interface StackNavigationGoBackAnimatedProviderProps {
    children: JSX.Element;
    goBackAnimated?: () => void;
}
export declare function StackNavigationGoBackAnimatedProvider({ children, goBackAnimated }: StackNavigationGoBackAnimatedProviderProps): JSX.Element;
export {};
