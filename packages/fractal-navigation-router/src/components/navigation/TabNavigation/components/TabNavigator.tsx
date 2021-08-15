import React from 'react';
import { Layer } from '@bma98/fractal-ui';
import { TabBarContextProvider } from '@bma98/fractal-navigation';
import { ScreenContainer } from '../../../ScreenContainer';

export interface TabNavigatorProps {
    children: Array<JSX.Element> | JSX.Element;
    tabBar: JSX.Element;
}

const styles = { flex: 1 };

export function TabNavigator({ tabBar, children, ...others }: TabNavigatorProps): JSX.Element {
    return (
        <TabBarContextProvider>
            <Layer flex={1} overflow={'hidden'}>
                <ScreenContainer {...others} style={styles}>
                    {children}
                </ScreenContainer>
                {tabBar}
            </Layer>
        </TabBarContextProvider>
    );
}
