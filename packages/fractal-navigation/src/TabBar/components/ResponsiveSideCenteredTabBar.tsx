import React, { ReactElement } from 'react';
import { TabBarProps } from '../types';
import { useValueForLargeSizeType } from '@bma98/size-class';
import { CenteredTabBar } from './CenteredTabBar';

export function ResponsiveSideTabBar(props: Omit<TabBarProps, 'tabBarPosition'>): ReactElement {
    const tabBarPosition = useValueForLargeSizeType('width', 'left', 'bottom');
    return <CenteredTabBar {...props} tabBarPosition={tabBarPosition} />;
}
