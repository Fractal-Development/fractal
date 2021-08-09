import React from 'react';
import { NavigationBarProps } from '@bma98/fractal-navigation';

export function NavigationBarConfig(props: Omit<NavigationBarProps, 'goBack>'>): JSX.Element {
    const { children } = props;
    return <>{children}</>;
}
