import React from 'react';
import { Text } from '../Text';
import { TextProps } from '../BaseText/types';

export function EllipsisText({ variant, ...others }: TextProps): JSX.Element {
    return <Text variant={variant} {...others} numberOfLines={1} ellipsizeMode='tail' />;
}
