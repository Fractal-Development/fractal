import React, { ReactNode } from 'react';
interface NavigationBarLeftProps {
    children?: ReactNode;
    showBackButton: boolean;
    backTitle?: string;
    goBack: () => void;
}
export declare const NavigationBarLeft: React.MemoExoticComponent<({ children, showBackButton, backTitle, goBack }: NavigationBarLeftProps) => JSX.Element>;
export {};
