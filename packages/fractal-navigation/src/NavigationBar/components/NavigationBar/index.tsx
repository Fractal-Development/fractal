import React from 'react';
import { NavigationBarProps } from '../../types';
import { NavigationBarBackground, NavigationBarCenter, NavigationBarLeft, NavigationBarRight } from './components';
import { useSetNavigationBarInsets } from '../../hooks/useSetNavigationBarInsets';

export function NavigationBar({
    hidden,
    title,
    showBackButton = false,
    backTitle,
    goBack,
    backgroundColor,
    disabledSafeAreaInsets,
    leftChild,
    centerChild,
    rightChild,
    ...layerProps
}: NavigationBarProps): JSX.Element | null {
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
