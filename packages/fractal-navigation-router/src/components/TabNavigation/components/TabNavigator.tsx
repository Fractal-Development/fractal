import React from 'react';
import { Layer } from '@bma98/fractal-ui';
import { TabBarContextProvider } from '@bma98/fractal-navigation';
import { ScreenContainer } from '../../ScreenContainer';
import { TabBarItemsHistoryProvider } from '../context';
import { Navigate, Route, Routes } from '../../../router';

export interface TabNavigatorProps {
    children: Array<JSX.Element> | JSX.Element;
    tabBar: JSX.Element;
    path: string;
    initialTabPath: string;
}

const styles = { flex: 1 };

export function TabNavigator({ tabBar, children, path, initialTabPath, ...others }: TabNavigatorProps): JSX.Element {
    return (
        <TabBarContextProvider>
            <TabBarItemsHistoryProvider>
                <Routes>
                    <Route
                        path='/*'
                        element={
                            <Layer flex={1}>
                                <ScreenContainer {...others} style={styles}>
                                    {children}
                                </ScreenContainer>
                                {tabBar}
                            </Layer>
                        }
                    />
                    <Route path='/' element={<Navigate to={initialTabPath} />} />
                </Routes>
            </TabBarItemsHistoryProvider>
        </TabBarContextProvider>
    );
}
