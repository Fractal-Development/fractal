import React, { ReactElement } from 'react';
import { FractalAppRoot, Layer, PaddingLayer, Text, Background } from '@fractal/fractal-ui';
import {
    NavigationBarInsetsProvider,
    ResponsiveSideTabBar,
    SimpleTabBarItem,
    SimpleTabBarItemProps,
    TabBarContextProvider,
    TabBarInsetsLayer
} from '@fractal/fractal-navigation';
import {
    NavigationRouter,
    Routes,
    Route,
    Outlet,
    Navigate,
    useNavigate,
    useResolvedPath,
    useMatch,
    StackScreenWrapper
} from '@fractal/fractal-navigation-router';

import { ReactIcon } from './assets/ReactIcon';
import {
    AuthenticationScreenFragmentScreen,
    AutoCompleteScreen,
    ChatContentFragmentScreen,
    ListsFragmentScreen,
    MediaExamplesFragmentScreen,
    RecyclerViewFragmentScreen,
    RootScreen,
    ChipListFragmentScreen,
    ColorTabListFragmentScreen,
    ActivityIndicatorFragmentScreen,
    ErrorMessageFragmentScreen,
    screens,
    ChipFragmentScreen,
    ChartsExamplesScreen
} from './screens';

interface SimpleTabBarItemLinkProps extends Omit<SimpleTabBarItemProps, 'active' | 'onTabPress' | 'tabIdentifier'> {
    to: string;
}

function SimpleTabBarItemLink({ to, ...others }: SimpleTabBarItemLinkProps): ReactElement {
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
                                    <StackScreenWrapper
                                        navBarProps={{
                                            showBackButton: false,
                                            title: 'Fragments',
                                            largeTitle: true
                                        }}
                                    >
                                        <RootScreen />
                                    </StackScreenWrapper>
                                }
                            />
                            <Route
                                path={screens.chipFragment.path}
                                element={
                                    <StackScreenWrapper
                                        navBarProps={{
                                            showBackButton: true,
                                            title: screens.chipFragment.name
                                        }}
                                    >
                                        <ChipFragmentScreen />
                                    </StackScreenWrapper>
                                }
                            />
                            <Route
                                path={screens.chipListFragment.path}
                                element={
                                    <StackScreenWrapper
                                        navBarProps={{
                                            showBackButton: true,
                                            title: screens.chipListFragment.name
                                        }}
                                    >
                                        <ChipListFragmentScreen />
                                    </StackScreenWrapper>
                                }
                            />
                            <Route
                                path={screens.activityIndicatorFragmentScreen.path}
                                element={
                                    <StackScreenWrapper
                                        navBarProps={{
                                            showBackButton: true,
                                            title: screens.activityIndicatorFragmentScreen.name
                                        }}
                                    >
                                        <ActivityIndicatorFragmentScreen />
                                    </StackScreenWrapper>
                                }
                            />
                            <Route
                                path={screens.errorMessageFragmentScreen.path}
                                element={
                                    <StackScreenWrapper
                                        navBarProps={{
                                            showBackButton: true,
                                            title: screens.errorMessageFragmentScreen.name
                                        }}
                                    >
                                        <ErrorMessageFragmentScreen />
                                    </StackScreenWrapper>
                                }
                            />
                            <Route
                                path={screens.colorTabListFragment.path}
                                element={
                                    <StackScreenWrapper
                                        navBarProps={{
                                            showBackButton: true,
                                            title: screens.colorTabListFragment.name
                                        }}
                                    >
                                        <ColorTabListFragmentScreen />
                                    </StackScreenWrapper>
                                }
                            />
                            <Route
                                path={screens.recyclerViewFragment.path}
                                element={
                                    <StackScreenWrapper
                                        navBarProps={{
                                            showBackButton: true,
                                            title: screens.recyclerViewFragment.name
                                        }}
                                    >
                                        <RecyclerViewFragmentScreen />
                                    </StackScreenWrapper>
                                }
                            />
                            <Route
                                path={screens.authScreenFragment.path}
                                element={
                                    <StackScreenWrapper
                                        navBarProps={{
                                            showBackButton: true,
                                            title: screens.authScreenFragment.name
                                        }}
                                    >
                                        <AuthenticationScreenFragmentScreen />
                                    </StackScreenWrapper>
                                }
                            />
                            <Route
                                path={screens.chatFragment.path}
                                element={
                                    <StackScreenWrapper
                                        navBarProps={{
                                            showBackButton: true,
                                            title: screens.chatFragment.name
                                        }}
                                    >
                                        <ChatContentFragmentScreen />
                                    </StackScreenWrapper>
                                }
                            />
                            <Route
                                path={screens.mediaFragment.path}
                                element={
                                    <StackScreenWrapper
                                        navBarProps={{
                                            showBackButton: true,
                                            title: screens.mediaFragment.name
                                        }}
                                    >
                                        <MediaExamplesFragmentScreen />
                                    </StackScreenWrapper>
                                }
                            />
                            <Route
                                path={screens.listsFragment.path}
                                element={
                                    <StackScreenWrapper
                                        navBarProps={{
                                            showBackButton: true,
                                            title: screens.listsFragment.name
                                        }}
                                    >
                                        <ListsFragmentScreen />
                                    </StackScreenWrapper>
                                }
                            />
                            <Route
                                path={screens.autocompleteFragment.path}
                                element={
                                    <StackScreenWrapper
                                        navBarProps={{
                                            showBackButton: true,
                                            title: screens.autocompleteFragment.name
                                        }}
                                    >
                                        <AutoCompleteScreen />
                                    </StackScreenWrapper>
                                }
                            />
                            <Route
                                path={screens.chartsFragment.path}
                                element={
                                    <StackScreenWrapper
                                        navBarProps={{
                                            showBackButton: true,
                                            title: screens.chartsFragment.name
                                        }}
                                    >
                                        <ChartsExamplesScreen />
                                    </StackScreenWrapper>
                                }
                            />
                        </Route>
                        <Route
                            path='credits'
                            element={
                                <Background>
                                    <PaddingLayer>
                                        <Text>Empty for now...</Text>
                                    </PaddingLayer>
                                </Background>
                            }
                        />
                    </Route>
                </Routes>
            </NavigationRouter>
        </FractalAppRoot>
    );
}
