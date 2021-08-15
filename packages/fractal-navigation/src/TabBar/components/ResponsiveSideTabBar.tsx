import React, { ReactElement } from 'react';
import { TabBarProps } from '../types';
import { TabBar } from './TabBar';
import { useValueForLargeSizeType } from '@bma98/size-class';

export function ResponsiveSideTabBar(props: Omit<TabBarProps, 'tabBarPosition'>): ReactElement {
    const tabBarPosition = useValueForLargeSizeType('width', 'left', 'bottom');
    return <TabBar {...props} tabBarPosition={tabBarPosition} />;
}
