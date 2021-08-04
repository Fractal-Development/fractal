import React from 'react';
import { useTheme } from '@bma98/fractal-ui';
import { ReactElement } from 'react';
import { useTabBarPosition } from '../../TabBar/hooks/useTabBarPosition';
import { CircularTabBarItem } from './CircularTabBarItem';
import { CircularTabBarItemProps } from './types/CircularTabBarItemProps';

export function SimpleCircularTabBarItem(props: CircularTabBarItemProps): ReactElement {
    const tabBarPosition = useTabBarPosition();
    const { spacings } = useTheme();
    const marginLeft = tabBarPosition !== 'bottom' ? spacings.m : undefined;

    return (
        <CircularTabBarItem
            width={56}
            height={56}
            borderRadius={28}
            marginBottom={spacings.m}
            marginLeft={marginLeft}
            alignSelf='center'
            {...props}
        />
    );
}
