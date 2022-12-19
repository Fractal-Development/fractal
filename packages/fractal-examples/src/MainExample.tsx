import { ResponsiveSideTabBar, TabBarInsetsLayer } from '@bma98/fractal-navigation';
import {
    NavigationBarConfig,
    NavigationRouter,
    SimpleTabBarItemLink,
    StackNavigator,
    StackScreen,
    TabNavigator,
    TabScreen,
    FractalRoutesProvider
} from '@bma98/fractal-navigation-router';
import { FractalAppRoot, PaddingLayer, Text } from '@bma98/fractal-ui';
import React, { ReactElement } from 'react';

import { ReactIcon } from './assets/ReactIcon';
import { AuthenticationScreenFragmentScreen } from './screens/AuthenticationScreenFragmentScreen';
import { ChatContentFragmentScreen } from './screens/ChatContentFragmentScreen';
import { MediaExamplesFragmentScreen } from './screens/MediaExamplesFragmentScree';
import { RecyclerViewFragmentScreen } from './screens/RecyclerViewFragmentScreen';
import { RootScreen } from './screens/RootScreen';
import { ChipFragmentScreen } from './screens/ui-screens/dataDisplay/ChipFragmentScreen';
import { ChipListFragmentScreen } from './screens/ui-screens/dataDisplay/ChipListFragmentScreen';
import { ColorTabListFragmentScreen } from './screens/ui-screens/dataDisplay/ColorTabListFragmentScreen';
import { ActivityIndicatorFragmentScreen } from './screens/ui-screens/feedback/ActivityIndicatorFragmentScreen';
import { ErrorMessageFragmentScreen } from './screens/ui-screens/feedback/ErrorMessageFragmentScreen';
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
        <FractalAppRoot>
            <FractalRoutesProvider routes={routes}>
                <NavigationRouter>
                    <TabNavigator path={routes.root} initialTabPath={routes.components} tabBar={<MainTabBar />}>
                        <TabScreen path={routes.components}>
                            <TabBarInsetsLayer>
                                <StackNavigator path={routes.components}>
                                    <StackScreen
                                        fractalRoutesIdentifier='components'
                                        navBarConfig={<NavigationBarConfig title='Fragments' largeTitle />}
                                        isRootRoute
                                        path={routes.components}
                                    >
                                        <RootScreen />
                                    </StackScreen>
                                    <StackScreen
                                        fractalRoutesIdentifier='component'
                                        navBarConfig={<NavigationBarConfig title={screens.chipFragment.name} />}
                                        path={screens.chipFragment.path}
                                    >
                                        <ChipFragmentScreen />
                                    </StackScreen>
                                    <StackScreen
                                        fractalRoutesIdentifier='component'
                                        navBarConfig={<NavigationBarConfig title={screens.chipListFragment.name} />}
                                        path={screens.chipListFragment.path}
                                    >
                                        <ChipListFragmentScreen />
                                    </StackScreen>
                                    <StackScreen
                                        fractalRoutesIdentifier='component'
                                        navBarConfig={<NavigationBarConfig title={screens.activityIndicatorFragmentScreen.name} />}
                                        path={screens.activityIndicatorFragmentScreen.path}
                                    >
                                        <ActivityIndicatorFragmentScreen />
                                    </StackScreen>
                                    <StackScreen
                                        fractalRoutesIdentifier='component'
                                        navBarConfig={<NavigationBarConfig title={screens.errorMessageFragmentScreen.name} />}
                                        path={screens.errorMessageFragmentScreen.path}
                                    >
                                        <ErrorMessageFragmentScreen />
                                    </StackScreen>
                                    <StackScreen
                                        fractalRoutesIdentifier='component'
                                        navBarConfig={<NavigationBarConfig title={screens.colorTabListFragment.name} />}
                                        path={screens.colorTabListFragment.path}
                                    >
                                        <ColorTabListFragmentScreen />
                                    </StackScreen>
                                    <StackScreen
                                        fractalRoutesIdentifier='component'
                                        navBarConfig={<NavigationBarConfig title={screens.recyclerViewFragment.name} />}
                                        path={screens.recyclerViewFragment.path}
                                    >
                                        <RecyclerViewFragmentScreen />
                                    </StackScreen>
                                    <StackScreen
                                        fractalRoutesIdentifier='component'
                                        navBarConfig={<NavigationBarConfig title={screens.authScreenFragment.name} />}
                                        path={screens.authScreenFragment.path}
                                    >
                                        <AuthenticationScreenFragmentScreen />
                                    </StackScreen>
                                    <StackScreen
                                        fractalRoutesIdentifier='component'
                                        navBarConfig={<NavigationBarConfig title={screens.chatFragment.name} />}
                                        path={screens.chatFragment.path}
                                    >
                                        <ChatContentFragmentScreen />
                                    </StackScreen>
                                    <StackScreen
                                        fractalRoutesIdentifier='component'
                                        navBarConfig={<NavigationBarConfig title={screens.mediaFragment.name} />}
                                        path={screens.mediaFragment.path}
                                    >
                                        <MediaExamplesFragmentScreen />
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
            </FractalRoutesProvider>
        </FractalAppRoot>
    );
}
