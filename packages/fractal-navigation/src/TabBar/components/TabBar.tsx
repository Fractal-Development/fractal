import React, { useContext, useEffect } from 'react';
import { SafeAreaLayer } from '@fractal-software/fractal-ui';
import { useValueForLargeSizeType } from '@fractal-software/size-class';
import { TabBarProps } from '../types';
import { useSetTabBarInsets } from '../hooks/useSetTabBarInsets';
import { TabBarPositionContext } from '../context/TabBarPositionProvider';
import { TabBarBackground } from './TabBarBackground';

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
