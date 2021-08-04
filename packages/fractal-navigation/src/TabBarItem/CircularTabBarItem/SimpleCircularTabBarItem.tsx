import React from 'react';
import { useTheme } from '@bma98/fractal-ui';
import { ReactElement } from 'react';
import { useTabBarPosition } from '../../TabBar/hooks/useTabBarPosition';
import { CircularTabBarItem } from './CircularTabBarItem';
import { CircularTabBarItemProps } from './types/CircularTabBarItemProps';
import { useWidthSizeGroup, getValueForCompactSize } from '@bma98/size-class';

export function SimpleCircularTabBarItem(props: CircularTabBarItemProps): ReactElement {
    const tabBarPosition = useTabBarPosition();
    const { spacings } = useTheme();

    const [widthSizeType] = useWidthSizeGroup();
    const size = getValueForCompactSize(widthSizeType, 56, 48);
    const marginBottom = tabBarPosition !== 'bottom' ? spacings.m : getValueForCompactSize(widthSizeType, spacings.m, undefined);
    const marginLeft = tabBarPosition !== 'bottom' ? getValueForCompactSize(widthSizeType, spacings.m, undefined) : undefined;

    return (
        <CircularTabBarItem
            width={size}
            height={size}
            borderRadius={size / 2}
            marginBottom={marginBottom}
            marginLeft={marginLeft}
            alignSelf='center'
            {...props}
        />
    );
}
