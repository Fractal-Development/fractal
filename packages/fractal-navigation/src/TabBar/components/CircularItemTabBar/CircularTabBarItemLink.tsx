import React from 'react';
import { useIsRouteActive, useGoToTab } from '@bma98/fractal-navigation-router';
import { BottomCircularTabBarItem } from './BottomCircularTabBarItem';
import { LeftCircularTabBarItem } from './LeftCircularTabBarItem';
import { RightCircularTabBarItem } from './RightCircularTabBarItem';

interface CircularTabBarItemLinkProps {
    path: string;
    tabBarPosition: 'left' | 'bottom' | 'right';
}

export function CircularTabBarItemLink({ tabBarPosition, path }: CircularTabBarItemLinkProps): JSX.Element {
    const isRouteActive = useIsRouteActive(path, false);
    const goToTab = useGoToTab(path, isRouteActive);

    switch (tabBarPosition) {
        case 'left':
            return <LeftCircularTabBarItem onPress={goToTab} />;
        case 'right':
            return <RightCircularTabBarItem onPress={goToTab} />;
        case 'bottom':
            return <BottomCircularTabBarItem onPress={goToTab} />;
        default:
            return <LeftCircularTabBarItem onPress={goToTab} />;
    }
}
