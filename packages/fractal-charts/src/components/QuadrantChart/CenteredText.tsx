import React from 'react';
import { Text, TextProps, useTheme } from '@fractal-software/fractal-ui';

interface CenteredTextProps extends TextProps {
    style?: any;
    children: string;
    width?: number;
    height?: number;
    position?: 'absolute' | 'relative';
    marginTop?: number;
}

export function CenteredText({ style, children, color, ...others }: CenteredTextProps): JSX.Element {
    const { colors } = useTheme();
    return (
        <Text fontWeight={300} fontSize={14} color={colors.label || color} style={{ textAlign: 'center', ...style }} {...others}>
            {children}
        </Text>
    );
}
