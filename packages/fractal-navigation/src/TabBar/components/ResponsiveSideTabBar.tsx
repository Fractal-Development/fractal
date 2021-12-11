import React, { ReactElement } from 'react';
import { useValueForLargeSizeType } from '@bma98/size-class';
import { TabBarProps } from '../types';
import { TabBar } from './TabBar';

export function ResponsiveSideTabBar(props: Omit<TabBarProps, 'tabBarPosition'>): ReactElement {
    const tabBarPosition = useValueForLargeSizeType('width', 'left', 'bottom');
    return <TabBar {...props} tabBarPosition={tabBarPosition} />;
}
