import React from 'react';
import { useTheme, Text, TextProps } from '@fractal/fractal-ui';

interface NavigationBarTitleProps extends TextProps {
    title: string;
}

export function NavigationBarTitle({ title, ...textProps }: NavigationBarTitleProps) {
    const { navigationBar } = useTheme();

    return (
        <Text {...navigationBar.title} {...textProps}>
            {title}
        </Text>
    );
}
