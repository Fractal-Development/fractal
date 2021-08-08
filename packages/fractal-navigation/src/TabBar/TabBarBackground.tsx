import React from 'react';
import { Layer, useTheme } from '@bma98/fractal-ui';
import { TabBarProps } from './types';
import { useTabBarPositionLayoutProps, useTabBarSafeAreaPadding } from './hooks';
import { tabBarCSSPosition } from './tabBarCSSPosition';

export function TabBarBackground(props: TabBarProps): JSX.Element {
    const { tabBarPosition } = props;
    const positionValues = useTabBarPositionLayoutProps(tabBarPosition);
    const tabBarSafeAreaPadding = useTabBarSafeAreaPadding(tabBarPosition);
    const justifyContent = tabBarPosition === 'bottom' ? 'center' : 'flex-start';
    const { tabBar } = useTheme();

    return (
        <Layer
            backgroundColor={tabBar.backgroundColor}
            boxShadow={tabBar.shadow}
            justifyContent={justifyContent}
            position={tabBarCSSPosition}
            zIndex={3000}
            {...positionValues}
            {...tabBarSafeAreaPadding}
            {...props}
        />
    );
}
