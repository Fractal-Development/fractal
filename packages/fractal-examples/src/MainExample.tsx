import React, { ReactElement } from 'react';
import { FractalAppRoot, PaddingLayer, Text } from '@bma98/fractal-ui';
import {
    NavigationBarConfig,
    NavigationRouter,
    SimpleTabBarItemLink,
    StackNavigator,
    StackScreen,
    TabNavigator,
    TabScreen
} from '@bma98/fractal-navigation-router';
import { RecyclerViewFragmentScreen } from './screens/RecyclerViewFragmentScreen';
import { RootScreen } from './screens/RootScreen';
import { ChipFragmentScreen } from './screens/ChipFragmentScreen';
import { ResponsiveSideTabBar, TabBarInsetsLayer } from '@bma98/fractal-navigation';
import { ReactIcon } from './assets/ReactIcon';
import { routes } from './screens/util/routes';
import { screens } from './screens/util/screens';
import { AuthenticationScreenFragmentScreen } from './screens/AuthenticationScreenFragmentScreen';

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
                                    navBarConfig={<NavigationBarConfig title={'Fragments'} largeTitle />}
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
                                    navBarConfig={<NavigationBarConfig title={screens.authScreen.name} />}
                                    path={screens.authScreen.path}
                                >
                                    <AuthenticationScreenFragmentScreen />
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
            </NavigationRouter>
        </FractalAppRoot>
    );
}
