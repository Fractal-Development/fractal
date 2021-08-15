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
import { NavigationLayer, ResponsiveSideTabBar } from '@bma98/fractal-navigation';
import { ReactIcon } from './assets/ReactIcon';
import { routes } from './screens/util/routes';
import { screens } from './screens/util/screens';

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
                        <NavigationLayer>
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
                            </StackNavigator>
                        </NavigationLayer>
                    </TabScreen>
                    <TabScreen path={routes.credits}>
                        <NavigationLayer>
                            <PaddingLayer>
                                <Text>Empty for now...</Text>
                            </PaddingLayer>
                        </NavigationLayer>
                    </TabScreen>
                </TabNavigator>
            </NavigationRouter>
        </FractalAppRoot>
    );
}
