import React, { useMemo } from 'react';
import { Layer } from '@bma98/fractal-ui';
import { TabBarContextProvider } from '@bma98/fractal-navigation';
import { ScreenContainer } from '../../components/ScreenContainer';

export interface TabNavigatorProps {
    children: Array<JSX.Element> | JSX.Element;
    tabBar: JSX.Element;
    style: any;
}

export function TabNavigator({ tabBar, children, style, ...others }: TabNavigatorProps): JSX.Element {
    const finalStyle = useMemo(() => {
        return [
            style,
            {
                flex: 1
            }
        ];
    }, [style]);

    return (
        <TabBarContextProvider>
            <Layer flex={1} overflow={'hidden'}>
                <ScreenContainer {...others} style={finalStyle}>
                    {children}
                </ScreenContainer>
                {tabBar}
            </Layer>
        </TabBarContextProvider>
    );
}
