import React, { useContext, useLayoutEffect } from 'react';
import { TabBarProps } from './types';
import { useSetTabBarInsets } from './hooks/useSetTabBarInsets';
import { TabBarPositionContext } from './context/TabBarPositionProvider';
import { TabBarBackground } from './TabBarBackground';

export function TabBar({ style, tabBarPosition, ...others }: TabBarProps): JSX.Element {
    const [, setTabBarPosition] = useContext(TabBarPositionContext);

    useLayoutEffect(() => {
        setTabBarPosition(tabBarPosition);
    }, [tabBarPosition, setTabBarPosition]);

    useSetTabBarInsets();

    return <TabBarBackground {...others} tabBarPosition={tabBarPosition} />;
}
