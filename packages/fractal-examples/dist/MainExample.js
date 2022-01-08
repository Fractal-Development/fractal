import React from 'react';
import { FractalAppRoot, PaddingLayer, Text } from '@bma98/fractal-ui';
import { NavigationBarConfig, NavigationRouter, SimpleTabBarItemLink, StackNavigator, StackScreen, TabNavigator, TabScreen, Route, Redirect } from '@bma98/fractal-navigation-router';
import { ResponsiveSideTabBar, TabBarInsetsLayer } from '@bma98/fractal-navigation';
import { RecyclerViewFragmentScreen } from './screens/RecyclerViewFragmentScreen';
import { RootScreen } from './screens/RootScreen';
import { ChipFragmentScreen } from './screens/ui-screens/dataDisplay/ChipFragmentScreen';
import { ReactIcon } from './assets/ReactIcon';
import { routes } from './screens/util/routes';
import { screens } from './screens/util/screens';
import { AuthenticationScreenFragmentScreen } from './screens/AuthenticationScreenFragmentScreen';
import { ChatContentFragmentScreen } from './screens/ChatContentFragmentScreen';
import { ChipListFragmentScreen } from './screens/ui-screens/dataDisplay/ChipListFragmentScreen';
import { ColorTabListFragmentScreen } from './screens/ui-screens/dataDisplay/ColorTabListFragmentScreen';
function renderReactIcon(color, size) {
    return React.createElement(ReactIcon, { fill: color, height: size, width: size });
}
function MainTabBar() {
    return (React.createElement(ResponsiveSideTabBar, null,
        React.createElement(SimpleTabBarItemLink, { path: routes.components, title: 'Components' }, renderReactIcon),
        React.createElement(SimpleTabBarItemLink, { path: routes.credits, title: 'Credits' }, renderReactIcon)));
}
export function MainExample() {
    return (React.createElement(FractalAppRoot, { handleThemeManually: true },
        React.createElement(NavigationRouter, null,
            React.createElement(TabNavigator, { tabBar: React.createElement(MainTabBar, null) },
                React.createElement(TabScreen, { path: routes.components },
                    React.createElement(TabBarInsetsLayer, null,
                        React.createElement(StackNavigator, { path: routes.components },
                            React.createElement(StackScreen, { navBarConfig: React.createElement(NavigationBarConfig, { title: 'Fragments', largeTitle: true }), isRootRoute: true, path: routes.components },
                                React.createElement(RootScreen, null)),
                            React.createElement(StackScreen, { navBarConfig: React.createElement(NavigationBarConfig, { title: screens.chipFragment.name }), path: screens.chipFragment.path },
                                React.createElement(ChipFragmentScreen, null)),
                            React.createElement(StackScreen, { navBarConfig: React.createElement(NavigationBarConfig, { title: screens.chipListFragment.name }), path: screens.chipListFragment.path },
                                React.createElement(ChipListFragmentScreen, null)),
                            React.createElement(StackScreen, { navBarConfig: React.createElement(NavigationBarConfig, { title: screens.colorTabListFragment.name }), path: screens.colorTabListFragment.path },
                                React.createElement(ColorTabListFragmentScreen, null)),
                            React.createElement(StackScreen, { navBarConfig: React.createElement(NavigationBarConfig, { title: screens.recyclerViewFragment.name }), path: screens.recyclerViewFragment.path },
                                React.createElement(RecyclerViewFragmentScreen, null)),
                            React.createElement(StackScreen, { navBarConfig: React.createElement(NavigationBarConfig, { title: screens.authScreenFragment.name }), path: screens.authScreenFragment.path },
                                React.createElement(AuthenticationScreenFragmentScreen, null)),
                            React.createElement(StackScreen, { navBarConfig: React.createElement(NavigationBarConfig, { title: screens.chatFragment.name }), path: screens.chatFragment.path },
                                React.createElement(ChatContentFragmentScreen, null))))),
                React.createElement(TabScreen, { path: routes.credits },
                    React.createElement(TabBarInsetsLayer, null,
                        React.createElement(PaddingLayer, null,
                            React.createElement(Text, null, "Empty for now..."))))),
            React.createElement(Route, { exact: true, strict: true, path: '/' },
                React.createElement(Redirect, { to: routes.components })))));
}
//# sourceMappingURL=MainExample.js.map