import React from 'react';
import { NavigationBarProps } from '../../types';
import { useNavigationBarChildren } from '../../hooks';
import { NavigationBarBackground, NavigationBarCenter, NavigationBarLeft, NavigationBarRight } from './components';
import { useSetNavigationBarInsets } from '../../hooks/useSetNavigationBarInsets';

export function NavigationBar({
    hidden,
    title,
    showBackButton = false,
    backTitle,
    children,
    goBack,
    backgroundColor,
    disabledSafeAreaInsets,
    ...layerProps
}: NavigationBarProps): JSX.Element | null {
    const [leftChild, centerChild, rightChild] = useNavigationBarChildren(children);

    useSetNavigationBarInsets();

    return hidden ? null : (
        <NavigationBarBackground backgroundColor={backgroundColor} disabledSafeAreaInsets={disabledSafeAreaInsets} {...layerProps}>
            <NavigationBarLeft showBackButton={showBackButton} goBack={goBack} backTitle={backTitle}>
                {leftChild}
            </NavigationBarLeft>
            <NavigationBarCenter title={title}>{centerChild}</NavigationBarCenter>
            <NavigationBarRight>{rightChild}</NavigationBarRight>
        </NavigationBarBackground>
    );
}
