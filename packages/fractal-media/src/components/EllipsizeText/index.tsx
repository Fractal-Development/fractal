import React from 'react';
import { Text, TextProps } from '@fractal/fractal-ui';

export function EllipsizeText({ variant, ...others }: TextProps): JSX.Element {
    return (
        <Text
            variant={variant}
            style={{ maxWidth: '100%', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', display: 'inline' }}
            {...others}
        />
    );
}
