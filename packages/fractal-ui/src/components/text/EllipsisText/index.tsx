import React from 'react';
import { Text } from '../Text';
import { TextProps } from '../BaseText/types';

export function EllipsisText({ variant, ...others }: TextProps): JSX.Element {
    return (
        <Text
            variant={variant}
            style={{ maxWidth: '100%', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', display: 'inline' }}
            {...others}
        />
    );
}
