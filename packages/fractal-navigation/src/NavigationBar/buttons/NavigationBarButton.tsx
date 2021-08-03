import React from 'react';
import { TextButton, TextButtonProps, useTheme } from '@bma98/fractal-ui';

export type NavigationBarButtonProps = Partial<Omit<TextButtonProps, 'variant'>>;

export function NavigationBarButton(props: NavigationBarButtonProps): JSX.Element {
    const { navigationBar } = useTheme();

    return <TextButton {...props} variant='main' textProps={navigationBar.textButton} />;
}
