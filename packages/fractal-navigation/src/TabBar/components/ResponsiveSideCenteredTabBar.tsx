import React, { ReactElement } from 'react';
import { useValueForLargeSizeType } from '@bma98/size-class';
import { TabBarProps } from '../types';
import { CenteredTabBar } from './CenteredTabBar';

export function ResponsiveSideCenteredTabBar(props: Omit<TabBarProps, 'tabBarPosition'>): ReactElement {
    const tabBarPosition = useValueForLargeSizeType('width', 'left', 'bottom');
    return <CenteredTabBar {...props} tabBarPosition={tabBarPosition} />;
}
