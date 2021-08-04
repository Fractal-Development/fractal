import React, { ReactElement, useState } from 'react';
import { Screen, ScreenStack } from 'react-native-screens';
import { MainExample } from '@bma98/fractal-examples';
import {
    NativeNavigationBar,
    NativeNavigationBarRightView,
    NavigationBarButton,
    TabBar,
    TabBarContextProvider,
    NavigationLayer,
    SimpleTabBarItem,
    SimpleCircularTabBarItem
} from '@bma98/fractal-navigation';
import { Layer, BugIcon, AppleIcon, SearchIcon, SafeAreaLayer } from '@bma98/fractal-ui';

interface NavigationProps {
    children: ReactElement;
}

export function Navigation({ children }: NavigationProps) {
    const [currentTab, setCurrentTab] = useState('/bug');

    return (
        <Layer flex={1}>
            <TabBarContextProvider>
                <ScreenStack style={{ flex: 1 }}>
                    <Screen>
                        <NativeNavigationBar title={'Examples'} goBack={() => {}}>
                            <NativeNavigationBarRightView>
                                <NavigationBarButton>Prueba</NavigationBarButton>
                            </NativeNavigationBarRightView>
                        </NativeNavigationBar>
                        <NavigationLayer>{children}</NavigationLayer>
                    </Screen>
                </ScreenStack>
                <TabBar tabBarPosition={'bottom'}>
                    <SimpleTabBarItem active={currentTab === '/bug'} title={'Bug'} tabIdentifier='/bug' onTabPress={setCurrentTab}>
                        {(color, size) => {
                            return <BugIcon fill={color} height={size} width={size} />;
                        }}
                    </SimpleTabBarItem>
                    <SimpleCircularTabBarItem tabIdentifier='/search' onTabPress={setCurrentTab}>
                        {(color, size) => {
                            return <SearchIcon fill={color} height={size} width={size} />;
                        }}
                    </SimpleCircularTabBarItem>
                    <SimpleTabBarItem active={currentTab === '/apple'} title={'Apple'} tabIdentifier='/apple' onTabPress={setCurrentTab}>
                        {(color, size) => {
                            return <AppleIcon fill={color} height={size} width={size} />;
                        }}
                    </SimpleTabBarItem>
                </TabBar>
            </TabBarContextProvider>
        </Layer>
    );
}

export default function App() {
    return (
        <Navigation>
            <MainExample />
        </Navigation>
    );
}
