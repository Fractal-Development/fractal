import React from 'react';
import { NavigationBarProps } from './types/NavigationBarProps';
import { useNavigationBarChildren } from './hooks/useNavigationBarChildren';
import { NavigationBarBackground } from './sections/NavigationBarBackground';
import { NavigationBarLeft } from './sections/NavigationBarLeft';
import { NavigationBarCenter } from './sections/NavigationBarCenter';
import { NavigationBarRight } from './sections/NavigationBarRight';

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
