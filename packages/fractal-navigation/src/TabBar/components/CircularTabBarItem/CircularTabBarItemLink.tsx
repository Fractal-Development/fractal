import React from 'react';
import { BottomCircularTabBarItem } from './BottomCircularTabBarItem';
import { LeftCircularTabBarItem } from './LeftCircularTabBarItem';
import { RightCircularTabBarItem } from './RightCircularTabBarItem';

interface CircularTabBarItemLinkProps {
    tabBarPosition: 'left' | 'bottom' | 'right';
    goToTab: () => void;
}

export function CircularTabBarItemLink({ tabBarPosition, goToTab }: CircularTabBarItemLinkProps): JSX.Element {
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
