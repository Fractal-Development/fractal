import React from 'react';
import { NavigationRoute } from '../../NavigationRoute';

export interface TabScreenProps {
    children: JSX.Element;
    path: string;
}

export function TabScreen(props: TabScreenProps): JSX.Element {
    return <NavigationRoute top={0} left={0} right={0} bottom={0} position="absolute" {...props} isTabScreen />;
}
