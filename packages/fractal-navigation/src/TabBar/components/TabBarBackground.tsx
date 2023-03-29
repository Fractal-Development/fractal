import React from 'react';
import { Layer, useTheme } from '@fractal-software/fractal-ui';
import { TabBarProps } from '../types';
import { useTabBarPositionLayoutProps, useTabBarSafeAreaPadding } from '../hooks';
import { tabBarCSSPosition } from '../util/tabBarCSSPosition';

export function TabBarBackground(props: TabBarProps): JSX.Element {
    const { tabBarPosition } = props;
    const { tabBar } = useTheme();
    const { translateY, translateX, ...layoutProps } = useTabBarPositionLayoutProps(tabBarPosition);
    const tabBarSafeAreaPadding = useTabBarSafeAreaPadding(tabBarPosition);
    const justifyContent = tabBarPosition === 'bottom' ? 'center' : 'flex-start';
    const shadow =
        tabBarPosition === 'bottom' ? tabBar.shadow : tabBarPosition === 'left' ? tabBar.leftPositionShadow : tabBar.rightPositionShadow;

    return (
        <Layer
            animate={{ translateY, translateX }}
            transition={{ type: 'timing' }}
            backgroundColor={tabBar.backgroundColor}
            boxShadow={shadow}
            justifyContent={justifyContent}
            position={tabBarCSSPosition}
            zIndex={3000}
            {...layoutProps}
            {...tabBarSafeAreaPadding}
            {...props}
        />
    );
}
