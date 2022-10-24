import React from 'react';
import { Layer } from '@bma98/fractal-ui';
import { TabBarContextProvider } from '@bma98/fractal-navigation';
import { ScreenContainer } from '../../../ScreenContainer';
import { Navigate, Route, Routes } from '../../../../router';
import { getRecursivePath } from './getRecursivePath';
import { TabNavigatorProps } from './types';
import { TabBarItemsHistoryProvider } from '../../../../context';

const styles = { flex: 1 };

export function TabNavigator({ tabBar, children, path, initialTabPath, ...others }: TabNavigatorProps): JSX.Element {
    return (
        <TabBarContextProvider>
            <TabBarItemsHistoryProvider>
                <Layer flex={1}>
                    <Routes>
                        <Route
                            path={getRecursivePath(path)}
                            element={
                                <ScreenContainer {...others} style={styles}>
                                    {children}
                                </ScreenContainer>
                            }
                        />
                        <Route path={path} element={<Navigate to={initialTabPath} />} />
                    </Routes>
                    {tabBar}
                </Layer>
            </TabBarItemsHistoryProvider>
        </TabBarContextProvider>
    );
}
