import React, { ReactElement, ReactNode } from 'react';
import { FractalAppRoot, Layer, PaddingLayer, Text, useTheme } from '@bma98/fractal-ui';
import {
    NavigationBar,
    NavigationBarInsetsProvider,
    NavigationBarProps,
    ResponsiveSideTabBar,
    SimpleTabBarItem,
    SimpleTabBarItemProps,
    TabBarContextProvider,
    TabBarInsetsLayer
} from '@bma98/fractal-navigation';

import { NavigationRouter, Routes, Route, Outlet, Navigate, useNavigate, useResolvedPath, useMatch } from './router';
import { ReactIcon } from './assets/ReactIcon';
import { AuthenticationScreenFragmentScreen } from './screens/AuthenticationScreenFragmentScreen';
import { AutoCompleteScreen } from './screens/AutoCompleteScreen';
import { ChatContentFragmentScreen } from './screens/ChatContentFragmentScreen';
import { ListsFragmentScreen } from './screens/ListsFragmentScreen';
import { MediaExamplesFragmentScreen } from './screens/MediaExamplesFragmentScree';
import { RecyclerViewFragmentScreen } from './screens/RecyclerViewFragmentScreen';
import { RootScreen } from './screens/RootScreen';
import { ChipFragmentScreen } from './screens/ui-screens/dataDisplay/ChipFragmentScreen';
import { ChipListFragmentScreen } from './screens/ui-screens/dataDisplay/ChipListFragmentScreen';
import { ColorTabListFragmentScreen } from './screens/ui-screens/dataDisplay/ColorTabListFragmentScreen';
import { ActivityIndicatorFragmentScreen } from './screens/ui-screens/feedback/ActivityIndicatorFragmentScreen';
import { ErrorMessageFragmentScreen } from './screens/ui-screens/feedback/ErrorMessageFragmentScreen';
import { screens } from './screens/util/screens';

export interface SimpleTabBarItemLinkProps extends Omit<SimpleTabBarItemProps, 'active' | 'onTabPress' | 'tabIdentifier'> {
    to: string;
}

export function SimpleTabBarItemLink({ to, ...others }: SimpleTabBarItemLinkProps): ReactElement {
    const navigate = useNavigate();
    const path = useResolvedPath(to);
    const match = useMatch({ path: path.pathname, end: false });
    const isRouteActive = match != null;

    const goToTab = () => {
        navigate(to);
    };

    return <SimpleTabBarItem {...others} tabIdentifier={to} onTabPress={goToTab} active={isRouteActive} />;
}

function renderReactIcon(color: string, size: number) {
    return <ReactIcon fill={color} height={size} width={size} />;
}

function MainTabBar(): ReactElement {
    return (
        <ResponsiveSideTabBar>
            <SimpleTabBarItemLink to='components' title='Components'>
                {renderReactIcon}
            </SimpleTabBarItemLink>
            <SimpleTabBarItemLink to='credits' title='Credits'>
                {renderReactIcon}
            </SimpleTabBarItemLink>
        </ResponsiveSideTabBar>
    );
}

function TabLayout() {
    return (
        <TabBarContextProvider>
            <Layer flex={1}>
                <TabBarInsetsLayer>
                    <NavigationBarInsetsProvider>
                        <Outlet />
                    </NavigationBarInsetsProvider>
                </TabBarInsetsLayer>
                <MainTabBar />
            </Layer>
        </TabBarContextProvider>
    );
}

interface StackScreenProps {
    children: ReactNode;
    navBarProps?: Partial<NavigationBarProps>;
}

function StackScreenContent({ navBarProps, children }: StackScreenProps): ReactElement {
    const { colors } = useTheme();
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    };

    return (
        <>
            <NavigationBar goBack={goBack} {...navBarProps} />
            <Layer flex={1} backgroundColor={colors.background}>
                {children}
            </Layer>
        </>
    );
}

export function MainExample(): JSX.Element {
    return (
        <FractalAppRoot>
            <NavigationRouter>
                <Routes>
                    <Route path='/' element={<TabLayout />}>
                        <Route path='/' element={<Navigate to='components' replace />} />
                        <Route path='components'>
                            <Route
                                index
                                element={
                                    <StackScreenContent
                                        navBarProps={{
                                            showBackButton: false,
                                            title: 'Fragments',
                                            largeTitle: true
                                        }}
                                    >
                                        <RootScreen />
                                    </StackScreenContent>
                                }
                            />
                            <Route
                                path={screens.chipFragment.path}
                                element={
                                    <StackScreenContent
                                        navBarProps={{
                                            showBackButton: true,
                                            title: screens.chipFragment.name
                                        }}
                                    >
                                        <ChipFragmentScreen />
                                    </StackScreenContent>
                                }
                            />
                            <Route
                                path={screens.chipListFragment.path}
                                element={
                                    <StackScreenContent
                                        navBarProps={{
                                            showBackButton: true,
                                            title: screens.chipListFragment.name
                                        }}
                                    >
                                        <ChipListFragmentScreen />
                                    </StackScreenContent>
                                }
                            />
                            <Route
                                path={screens.activityIndicatorFragmentScreen.path}
                                element={
                                    <StackScreenContent
                                        navBarProps={{
                                            showBackButton: true,
                                            title: screens.activityIndicatorFragmentScreen.name
                                        }}
                                    >
                                        <ActivityIndicatorFragmentScreen />
                                    </StackScreenContent>
                                }
                            />
                            <Route
                                path={screens.errorMessageFragmentScreen.path}
                                element={
                                    <StackScreenContent
                                        navBarProps={{
                                            showBackButton: true,
                                            title: screens.errorMessageFragmentScreen.name
                                        }}
                                    >
                                        <ErrorMessageFragmentScreen />
                                    </StackScreenContent>
                                }
                            />
                            <Route
                                path={screens.colorTabListFragment.path}
                                element={
                                    <StackScreenContent
                                        navBarProps={{
                                            showBackButton: true,
                                            title: screens.colorTabListFragment.name
                                        }}
                                    >
                                        <ColorTabListFragmentScreen />
                                    </StackScreenContent>
                                }
                            />
                            <Route
                                path={screens.recyclerViewFragment.path}
                                element={
                                    <StackScreenContent
                                        navBarProps={{
                                            showBackButton: true,
                                            title: screens.recyclerViewFragment.name
                                        }}
                                    >
                                        <RecyclerViewFragmentScreen />
                                    </StackScreenContent>
                                }
                            />
                            <Route
                                path={screens.authScreenFragment.path}
                                element={
                                    <StackScreenContent
                                        navBarProps={{
                                            showBackButton: true,
                                            title: screens.authScreenFragment.name
                                        }}
                                    >
                                        <AuthenticationScreenFragmentScreen />
                                    </StackScreenContent>
                                }
                            />
                            <Route
                                path={screens.chatFragment.path}
                                element={
                                    <StackScreenContent
                                        navBarProps={{
                                            showBackButton: true,
                                            title: screens.chatFragment.name
                                        }}
                                    >
                                        <ChatContentFragmentScreen />
                                    </StackScreenContent>
                                }
                            />
                            <Route
                                path={screens.mediaFragment.path}
                                element={
                                    <StackScreenContent
                                        navBarProps={{
                                            showBackButton: true,
                                            title: screens.mediaFragment.name
                                        }}
                                    >
                                        <MediaExamplesFragmentScreen />
                                    </StackScreenContent>
                                }
                            />
                            <Route
                                path={screens.listsFragment.path}
                                element={
                                    <StackScreenContent
                                        navBarProps={{
                                            showBackButton: true,
                                            title: screens.listsFragment.name
                                        }}
                                    >
                                        <ListsFragmentScreen />
                                    </StackScreenContent>
                                }
                            />
                            <Route
                                path={screens.autocompleteFragment.path}
                                element={
                                    <StackScreenContent
                                        navBarProps={{
                                            showBackButton: true,
                                            title: screens.autocompleteFragment.name
                                        }}
                                    >
                                        <AutoCompleteScreen />
                                    </StackScreenContent>
                                }
                            />
                        </Route>
                        <Route
                            path='credits'
                            element={
                                <PaddingLayer>
                                    <Text>Empty for now...</Text>
                                </PaddingLayer>
                            }
                        />
                    </Route>
                </Routes>
            </NavigationRouter>
        </FractalAppRoot>
    );
}

/* <FractalAppRoot>
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
                                    <StackScreen
                                        fractalRoutesIdentifier='component'
                                        navBarConfig={<NavigationBarConfig title={screens.listsFragment.name} />}
                                        path={screens.listsFragment.path}
                                    >
                                        <ListsFragmentScreen />
                                    </StackScreen>
                                    <StackScreen
                                        fractalRoutesIdentifier='component'
                                        navBarConfig={<NavigationBarConfig title={screens.autocompleteFragment.name} />}
                                        path={screens.autocompleteFragment.path}
                                    >
                                        <AutoCompleteScreen />
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
        </FractalAppRoot> */
