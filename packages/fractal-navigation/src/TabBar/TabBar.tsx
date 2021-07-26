import React, { useContext, useLayoutEffect } from 'react';
import { TabBarProps } from './types';
import { useSetTabBarInsets } from './hooks/useSetTabBarInsets';
import { TabBarPositionContext } from './context/TabBarPositionProvider';
import { TabBarBackground } from './TabBarBackground';

export function TabBar({ tabBarPosition, ...others }: TabBarProps): JSX.Element {
    const [, setTabBarPosition] = useContext(TabBarPositionContext);

    useLayoutEffect(() => {
        setTabBarPosition(tabBarPosition);
    }, [tabBarPosition, setTabBarPosition]);

    useSetTabBarInsets();

    return <TabBarBackground tabBarPosition={tabBarPosition} {...others} />;
}
