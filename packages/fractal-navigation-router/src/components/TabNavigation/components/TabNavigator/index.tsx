import React from 'react';
import { Layer } from '@bma98/fractal-ui';
import { TabBarContextProvider } from '@bma98/fractal-navigation';
import { Navigate, Route, Routes } from '../../../../router';
import { getRecursivePath } from './getRecursivePath';
import { TabNavigatorProps } from './types';
import { TabBarItemsHistoryProvider } from '../../../../context';

export function TabNavigator({ tabBar, children, path, initialTabPath }: TabNavigatorProps): JSX.Element {
    return (
        <TabBarContextProvider>
            <TabBarItemsHistoryProvider>
                <Layer flex={1}>
                    <Routes>
                        <Route path={getRecursivePath(path)} element={children} />
                        <Route path={path} element={<Navigate to={initialTabPath} />} />
                    </Routes>
                    {tabBar}
                </Layer>
            </TabBarItemsHistoryProvider>
        </TabBarContextProvider>
    );
}
