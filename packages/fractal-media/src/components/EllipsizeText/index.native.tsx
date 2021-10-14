import React from 'react';
import { Text, TextProps } from '@bma98/fractal-ui';

export function EllipsizeText({ variant, ...others }: TextProps): JSX.Element {
    return <Text variant={variant} {...others} numberOfLines={1} ellipsizeMode={'tail'} />;
}
