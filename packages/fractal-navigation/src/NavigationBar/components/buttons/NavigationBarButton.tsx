import React from 'react';
import { TextButton, TextButtonProps, useTheme } from '@fractal/fractal-ui';

export type NavigationBarButtonProps = Partial<Omit<TextButtonProps, 'variant'>>;

export function NavigationBarButton(props: NavigationBarButtonProps): JSX.Element {
    const { navigationBar } = useTheme();

    return (
        <TextButton
            flexDirection='row'
            justifyContent='center'
            alignItems='center'
            {...props}
            variant='main'
            textProps={navigationBar.textButton}
        />
    );
}
