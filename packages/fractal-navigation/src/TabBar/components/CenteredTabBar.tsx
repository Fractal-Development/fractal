import React, { ReactElement } from 'react';
import { TabBarProps } from '../types';
import { TabBar } from './TabBar';

export function CenteredTabBar(props: TabBarProps): ReactElement {
    const { tabBarPosition } = props;
    const justifyContent = tabBarPosition === 'left' || tabBarPosition === 'right' ? 'center' : undefined;
    return <TabBar justifyContent={justifyContent} {...props} />;
}
