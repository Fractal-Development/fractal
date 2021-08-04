import React from 'react';
import { useTheme } from '@bma98/fractal-ui';
import { ReactElement } from 'react';
import { useTabBarPosition } from '../../TabBar/hooks/useTabBarPosition';
import { CircularTabBarItem } from './CircularTabBarItem';
import { CircularTabBarItemProps } from './types/CircularTabBarItemProps';

export function SimpleCircularTabBarItem(props: CircularTabBarItemProps): ReactElement {
    const tabBarPosition = useTabBarPosition();
    const { spacings } = useTheme();

    const marginBottom = tabBarPosition !== 'bottom' ? spacings.m : undefined;

    return <CircularTabBarItem marginBottom={marginBottom} alignSelf='center' {...props} />;
}
