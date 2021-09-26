import React, { useContext, useEffect } from 'react';
import { TabBarProps } from '../types';
import { useSetTabBarInsets } from '../hooks/useSetTabBarInsets';
import { TabBarPositionContext } from '../context/TabBarPositionProvider';
import { TabBarBackground } from './TabBarBackground';
import { SafeAreaLayer } from '@bma98/fractal-ui';
import { useValueForLargeSizeType } from '@bma98/size-class';

export function TabBar({ tabBarPosition, logo, children, ...others }: TabBarProps): JSX.Element {
    const [, setTabBarPosition] = useContext(TabBarPositionContext);
    const logoForLargeSizeType = useValueForLargeSizeType('width', logo, undefined);
    const isSideBar = tabBarPosition === 'left' || tabBarPosition === 'right';

    useEffect(() => {
        setTabBarPosition(tabBarPosition);
    }, [tabBarPosition, setTabBarPosition]);

    useSetTabBarInsets();

    return (
        <TabBarBackground tabBarPosition={tabBarPosition} {...others}>
            <SafeAreaLayer />
            {isSideBar && logoForLargeSizeType}
            {children}
        </TabBarBackground>
    );
}
