import React from 'react';
import { Text, TextProps } from '@bma98/fractal-ui';

interface CenteredTextProps extends TextProps {
    style?: any;
    children: string;
    width?: number;
    height?: number;
    position?: 'absolute' | 'relative';
    marginTop?: number;
}

export function CenteredText({ style, children, ...others }: CenteredTextProps): JSX.Element {
    return (
        <Text fontWeight={300} fontSize={14} style={{ textAlign: 'center', ...style }} {...others}>
            {children}
        </Text>
    );
}
