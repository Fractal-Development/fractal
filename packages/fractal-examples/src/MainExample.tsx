import React, { ReactElement } from 'react';
import { FractalAppRoot, PaddingLayer, Text } from '@bma98/fractal-ui';
import {
    NavigationBarConfig,
    NavigationRouter,
    SimpleTabBarItemLink,
    StackNavigator,
    StackScreen,
    TabNavigator,
    TabScreen,
    Route,
    Redirect
} from '@bma98/fractal-navigation-router';
import { ResponsiveSideTabBar, TabBarInsetsLayer } from '@bma98/fractal-navigation';
import { RecyclerViewFragmentScreen } from './screens/RecyclerViewFragmentScreen';
import { RootScreen } from './screens/RootScreen';
import { ChipFragmentScreen } from './screens/ChipFragmentScreen';
import { ReactIcon } from './assets/ReactIcon';
import { routes } from './screens/util/routes';
import { screens } from './screens/util/screens';
import { AuthenticationScreenFragmentScreen } from './screens/AuthenticationScreenFragmentScreen';
import { ChatContentFragmentScreen } from './screens/ChatContentFragmentScreen';

function renderReactIcon(color, size) {
    return <ReactIcon fill={color} height={size} width={size} />;
}

function MainTabBar(): ReactElement {
    return (
        <ResponsiveSideTabBar>
            <SimpleTabBarItemLink path={routes.components} title='Components'>
                {renderReactIcon}
            </SimpleTabBarItemLink>
            <SimpleTabBarItemLink path={routes.credits} title='Credits'>
                {renderReactIcon}
            </SimpleTabBarItemLink>
        </ResponsiveSideTabBar>
    );
}

export function MainExample(): JSX.Element {
    return (
        <FractalAppRoot handleThemeManually>
            <NavigationRouter>
                <TabNavigator tabBar={<MainTabBar />}>
                    <TabScreen path={routes.components}>
                        <TabBarInsetsLayer>
                            <StackNavigator path={routes.components}>
                                <StackScreen
                                    navBarConfig={<NavigationBarConfig title="Fragments" largeTitle />}
                                    isRootRoute
                                    path={routes.components}
                                >
                                    <RootScreen />
                                </StackScreen>
                                <StackScreen
                                    navBarConfig={<NavigationBarConfig title={screens.recyclerViewFragment.name} />}
                                    path={screens.recyclerViewFragment.path}
                                >
                                    <RecyclerViewFragmentScreen />
                                </StackScreen>
                                <StackScreen
                                    navBarConfig={<NavigationBarConfig title={screens.chipFragment.name} />}
                                    path={screens.chipFragment.path}
                                >
                                    <ChipFragmentScreen />
                                </StackScreen>
                                <StackScreen
                                    navBarConfig={<NavigationBarConfig title={screens.authScreenFragment.name} />}
                                    path={screens.authScreenFragment.path}
                                >
                                    <AuthenticationScreenFragmentScreen />
                                </StackScreen>
                                <StackScreen
                                    navBarConfig={<NavigationBarConfig title={screens.chatFragment.name} />}
                                    path={screens.chatFragment.path}
                                >
                                    <ChatContentFragmentScreen />
                                </StackScreen>
                            </StackNavigator>
                        </TabBarInsetsLayer>
                    </TabScreen>
                    <TabScreen path={routes.credits}>
                        <TabBarInsetsLayer>
                            <PaddingLayer>
                                <Text>Empty for now...</Text>
                            </PaddingLayer>
                        </TabBarInsetsLayer>
                    </TabScreen>
                </TabNavigator>
                <Route exact strict path='/'>
                    <Redirect to={routes.components} />
                </Route>
            </NavigationRouter>
        </FractalAppRoot>
    );
}
