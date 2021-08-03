import React from 'react';
import { Layer, useTheme } from '@bma98/fractal-ui';
import { TabBarProps } from './types';
import { useTabBarPositionValues, useTabBarSafeAreaPadding } from './hooks';
import { tabBarCSSPosition } from './tabBarCSSPosition';

export function TabBarBackground(props: TabBarProps): JSX.Element {
    const { tabBarPosition } = props;
    const positionValues = useTabBarPositionValues(tabBarPosition);
    const tabBarSafeAreaPadding = useTabBarSafeAreaPadding(tabBarPosition);
    const { tabBar } = useTheme();

    return (
        <Layer
            backgroundColor={tabBar.backgroundColor}
            boxShadow={tabBar.shadow}
            justifyContent={'center'}
            position={tabBarCSSPosition}
            zIndex={3000}
            {...positionValues}
            {...tabBarSafeAreaPadding}
            {...props}
        />
    );
}
