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
    ChartsExamplesScreen,
    ButtonsFragmentScreen,
    RadioButtonFragmentScreen,
    TextInputsFragmentScreen,
    InteractiveFragmentScreen,
    LayoutFragmentScreen,
    ContentMediaFragmentScreen,
    OverlaysFragmentScreen,
    TextsFragmentScreen,
    IconsFragmentScreen,
    ThemeSwapperFragmentScreen,
    AlertFragmentScreen,
    ToastFragmentScreen
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
                            <Route
                                path={screens.buttons_fragment.path}
                                element={
                                    <StackScreenWrapper
                                        navBarProps={{
                                            showBackButton: true,
                                            title: screens.buttons_fragment.name
                                        }}
                                    >
                                        <ButtonsFragmentScreen />
                                    </StackScreenWrapper>
                                }
                            />
                            <Route
                                path={screens.radio_button_fragment.path}
                                element={
                                    <StackScreenWrapper
                                        navBarProps={{
                                            showBackButton: true,
                                            title: screens.radio_button_fragment.name
                                        }}
                                    >
                                        <RadioButtonFragmentScreen />
                                    </StackScreenWrapper>
                                }
                            />
                            <Route
                                path={screens.text_inputs_fragment.path}
                                element={
                                    <StackScreenWrapper
                                        navBarProps={{
                                            showBackButton: true,
                                            title: screens.text_inputs_fragment.name
                                        }}
                                    >
                                        <TextInputsFragmentScreen />
                                    </StackScreenWrapper>
                                }
                            />
                            <Route
                                path={screens.interactive_fragment.path}
                                element={
                                    <StackScreenWrapper
                                        navBarProps={{
                                            showBackButton: true,
                                            title: screens.interactive_fragment.name
                                        }}
                                    >
                                        <InteractiveFragmentScreen />
                                    </StackScreenWrapper>
                                }
                            />
                            <Route
                                path={screens.layout_fragment.path}
                                element={
                                    <StackScreenWrapper
                                        navBarProps={{
                                            showBackButton: true,
                                            title: screens.layout_fragment.name
                                        }}
                                    >
                                        <LayoutFragmentScreen />
                                    </StackScreenWrapper>
                                }
                            />
                            <Route
                                path={screens.content_media_fragment.path}
                                element={
                                    <StackScreenWrapper
                                        navBarProps={{
                                            showBackButton: true,
                                            title: screens.content_media_fragment.name
                                        }}
                                    >
                                        <ContentMediaFragmentScreen />
                                    </StackScreenWrapper>
                                }
                            />
                            <Route
                                path={screens.overlays_fragment.path}
                                element={
                                    <StackScreenWrapper
                                        navBarProps={{
                                            showBackButton: true,
                                            title: screens.overlays_fragment.name
                                        }}
                                    >
                                        <OverlaysFragmentScreen />
                                    </StackScreenWrapper>
                                }
                            />
                            <Route
                                path={screens.texts_fragment.path}
                                element={
                                    <StackScreenWrapper
                                        navBarProps={{
                                            showBackButton: true,
                                            title: screens.texts_fragment.name
                                        }}
                                    >
                                        <TextsFragmentScreen />
                                    </StackScreenWrapper>
                                }
                            />
                            <Route
                                path={screens.icons_fragment.path}
                                element={
                                    <StackScreenWrapper
                                        navBarProps={{
                                            showBackButton: true,
                                            title: screens.icons_fragment.name
                                        }}
                                    >
                                        <IconsFragmentScreen />
                                    </StackScreenWrapper>
                                }
                            />
                            <Route
                                path={screens.theme_wapper_fragment.path}
                                element={
                                    <StackScreenWrapper
                                        navBarProps={{
                                            showBackButton: true,
                                            title: screens.theme_wapper_fragment.name
                                        }}
                                    >
                                        <ThemeSwapperFragmentScreen />
                                    </StackScreenWrapper>
                                }
                            />
                            <Route
                                path={screens.alert_fragment.path}
                                element={
                                    <StackScreenWrapper
                                        navBarProps={{
                                            showBackButton: true,
                                            title: screens.alert_fragment.name
                                        }}
                                    >
                                        <AlertFragmentScreen />
                                    </StackScreenWrapper>
                                }
                            />
                            <Route
                                path={screens.toast_fragment.path}
                                element={
                                    <StackScreenWrapper
                                        navBarProps={{
                                            showBackButton: true,
                                            title: screens.toast_fragment.name
                                        }}
                                    >
                                        <ToastFragmentScreen />
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
