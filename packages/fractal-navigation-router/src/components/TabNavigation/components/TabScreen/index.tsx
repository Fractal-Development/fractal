import React from 'react';
import { NavigationRoute } from '../../../NavigationRoute';
import { TabScreenProps } from './types';

export function TabScreen(props: TabScreenProps): JSX.Element {
    return <NavigationRoute {...props} isTabScreen />;
}
