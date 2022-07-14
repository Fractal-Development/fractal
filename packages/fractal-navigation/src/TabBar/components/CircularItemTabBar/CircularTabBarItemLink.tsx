import React from 'react';
import { useIsRouteActive, useGoToTab } from '@bma98/fractal-navigation-router';
import { BottomCircularTabBarItem } from './BottomCircularTabBarItem';
import { LeftCircularTabBarItem } from './LeftCircularTabBarItem';

interface CircularTabBarItemLinkProps {
    path: string;
    tabBarPosition: 'left' | 'bottom' | 'right';
}

export function CircularTabBarItemLink({ tabBarPosition, path }: CircularTabBarItemLinkProps): JSX.Element {
    const isRouteActive = useIsRouteActive(path, false);
    const goToTab = useGoToTab(path, isRouteActive);

    if (tabBarPosition === 'left') {
        return <LeftCircularTabBarItem onPress={goToTab} />;
    }
    return <BottomCircularTabBarItem onPress={goToTab} />;
}
