import React, { ReactElement } from 'react';
import { useTheme } from '@bma98/fractal-ui';
import { CircularTabBarItem } from './CircularTabBarItem';
import { CircularTabBarItemProps } from './CircularTabBarItem/types/CircularTabBarItemProps';

export function SimpleCircularTabBarItem(props: CircularTabBarItemProps): ReactElement {
    const { spacings } = useTheme();
    return <CircularTabBarItem width={56} height={56} borderRadius={28} marginBottom={spacings.m} alignSelf='center' {...props} />;
}
