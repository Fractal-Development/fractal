import React, { ReactNode, useState } from 'react';
import { MainExample } from '@bma98/fractal-examples';
import {
    NativeNavigationBarRightView,
    NavigationBarButton,
    TabBar,
    TabBarContextProvider,
    NavigationLayer,
    SimpleTabBarItem,
    SimpleCircularTabBarItem,
    useToggleTabBarHidden
} from '@bma98/fractal-navigation';
import { BugIcon, AppleIcon, SearchIcon, Button, ScrollView, Text, Layer, PaddingLayer } from '@bma98/fractal-ui';
import { StackNavigator, StackScreen, NavigationBarConfig, NavigationRouter, useHistory } from '@bma98/fractal-navigation-router';

interface NavigationProps {
    children: ReactNode;
}

function TabBarIsHiddenToggle() {
    const toggleTabBarIsHidden = useToggleTabBarHidden();
    return <Button text={'Toggle Tab Bar'} onPress={toggleTabBarIsHidden} />;
}

function GoToSecondStack() {
    const history = useHistory();
    return (
        <Button
            flexShrink={0}
            text={'Go To Second Stack'}
            onPress={() => {
                history.push('/second_stack');
            }}
        />
    );
}

function MainTabBar() {
    const [currentTab, setCurrentTab] = useState('/bug');
    return (
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
    );
}

export function TabBarNavigation({ children }: NavigationProps) {
    return (
        <TabBarContextProvider>
            {children}
            <MainTabBar />
        </TabBarContextProvider>
    );
}

export function Navigation() {
    return (
        <TabBarNavigation>
            <StackNavigator path={'/'}>
                <StackScreen
                    isRootRoute
                    path={'/'}
                    navBarConfig={
                        <NavigationBarConfig title={'Main Stack'}>
                            <NativeNavigationBarRightView>
                                <NavigationBarButton>Prueba</NavigationBarButton>
                            </NativeNavigationBarRightView>
                        </NavigationBarConfig>
                    }
                >
                    <NavigationLayer>
                        <ScrollView>
                            <PaddingLayer>
                                <GoToSecondStack />
                            </PaddingLayer>
                            <MainExample />
                        </ScrollView>
                    </NavigationLayer>
                </StackScreen>
                <StackScreen path={'/second_stack'} navBarConfig={<NavigationBarConfig title={'Second Stack'} />}>
                    <NavigationLayer>
                        <Text>Hola</Text>
                    </NavigationLayer>
                </StackScreen>
            </StackNavigator>
        </TabBarNavigation>
    );
}

export default function App() {
    return (
        <NavigationRouter>
            <Navigation />
        </NavigationRouter>
    );
}
