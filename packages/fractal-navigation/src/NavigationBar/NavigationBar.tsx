import React from 'react';
import { NavigationBarProps } from './types';
import { useNavigationBarChildren } from './hooks';
import { NavigationBarBackground, NavigationBarCenter, NavigationBarLeft, NavigationBarRight } from './navigationBarSections';

export function NavigationBar({
    hidden,
    title,
    showBackButton = false,
    backTitle,
    children,
    goBack
}: NavigationBarProps): JSX.Element | null {
    const [leftChild, centerChild, rightChild] = useNavigationBarChildren(children);

    return hidden ? null : (
        <NavigationBarBackground>
            <NavigationBarLeft showBackButton={showBackButton} goBack={goBack} backTitle={backTitle}>
                {leftChild}
            </NavigationBarLeft>
            <NavigationBarCenter title={title}>{centerChild}</NavigationBarCenter>
            <NavigationBarRight>{rightChild}</NavigationBarRight>
        </NavigationBarBackground>
    );
}
