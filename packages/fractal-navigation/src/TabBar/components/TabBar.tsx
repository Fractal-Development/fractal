import React, { useContext, useEffect } from 'react';
import { TabBarProps } from '../types';
import { useSetTabBarInsets } from '../hooks/useSetTabBarInsets';
import { TabBarPositionContext } from '../context/TabBarPositionProvider';
import { TabBarBackground } from './TabBarBackground';
import { SafeAreaLayer } from '@bma98/fractal-ui';

export function TabBar({ tabBarPosition, children, ...others }: TabBarProps): JSX.Element {
    const [, setTabBarPosition] = useContext(TabBarPositionContext);

    useEffect(() => {
        setTabBarPosition(tabBarPosition);
    }, [tabBarPosition, setTabBarPosition]);

    useSetTabBarInsets();

    return (
        <TabBarBackground tabBarPosition={tabBarPosition} {...others}>
            <SafeAreaLayer />
            {children}
        </TabBarBackground>
    );
}
