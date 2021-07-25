import React from 'react';
import { TextButton, TextButtonProps } from '@bma98/fractal-ui';

export type NavigationBarButtonProps = Partial<Omit<TextButtonProps, 'variant'>>;

export function NavigationBarButton(props: NavigationBarButtonProps): JSX.Element {
    return <TextButton {...props} variant='main' />;
}
