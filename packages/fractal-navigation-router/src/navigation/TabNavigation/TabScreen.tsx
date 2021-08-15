import React from 'react';
import { NavigationRoute } from '../NavigationRoute';

export interface TabScreenProps {
    children: JSX.Element;
    path: string;
}

export function TabScreen(props: TabScreenProps): JSX.Element {
    return <NavigationRoute {...props} isTabScreen />;
}
